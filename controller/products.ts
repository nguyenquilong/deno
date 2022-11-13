import { getDB } from "../helper/db_connect.ts";

// import {Product} from "../entities/product.ts"


const productController = {
    list: async (ctx) => {
        const list_products = await getDB().collection("product").find()
        console.log("list", list_products)
        ctx.response.body = {products : {}}
    }
}

export default productController

