import { Router } from "https://deno.land/x/oak/mod.ts";

const todosRouter = new Router()

import todoController from '../controller/todos.ts'

interface Todo {
    id: String
    text: String
}

let todos: Todo[] = []

todosRouter.get('/todos', todoController.get)

todosRouter.post('/todos', todoController.post)

// router.post('/todos', async (ctx) => {
   
//     const result = ctx.request.body();
//     const text = await result.value;
//     console.log(text)


//     // const newTodo = {
//     //     id: new Date().toISOString(),
//     //     // text: ctx.request.boby.text
//     // }
// })

export default todosRouter