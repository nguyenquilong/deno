import { Router } from "https://deno.land/x/oak/mod.ts";

import productController from "../controller/products.ts";

const productRouter = new Router()

productRouter.get('/products', productController.list)

// router.post('/todos', todoController.post)

// router.post('/todos', async (ctx) => {
   
//     const result = ctx.request.body();
//     const text = await result.value;
//     console.log(text)


//     // const newTodo = {
//     //     id: new Date().toISOString(),
//     //     // text: ctx.request.boby.text
//     // }
// })

export default productRouter