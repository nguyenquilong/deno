import { Application } from "https://deno.land/x/oak/mod.ts";

import router from './routes/routers.ts'
import { connectDb } from "./helper/db_connect.ts"

connectDb()

console.log('router', router.todosRouter)

const app = new Application();

app.use(async (ctx, next) => {
    console.log('Middleware!');
    await next();
  });

app.use(async (ctx, next) => {
    ctx.response.headers.set('Access-Control-Allow-Origin', '*');
    ctx.response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    ctx.response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
    await next();
  });

// app.use((ctx) => {
//   ctx.response.body = "Hello World from Deno !";
// });


app.use(router.productRouter.routes());
app.use(router.todosRouter.routes());

app.use(router.productRouter.allowedMethods());
app.use(router.todosRouter.allowedMethods());


await app.listen({ port: 8000 });
