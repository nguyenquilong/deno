
import { getDB } from '../helper/db_connect.ts'

interface Todo {
    id?: String,
    text: String
}

const todosController = {
    get: async (ctx) => {
        const todos = await getDB().collection('user').find()
        ctx.response.body = {todos1 : todos}
    },
    post: async (ctx) => {
        const data = ctx.request.body();
        const text = await data.value;
        console.log(text)
        const newTodo: Todo = {
           // id: new Date().toISOString(),
            text: text.text
        }

        await getDB().collection('user').insertOne(newTodo)

        ctx.response.body = {
            message: 'Success',
            todo: newTodo
        }
    }
}



export default todosController;