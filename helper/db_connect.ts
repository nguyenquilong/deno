import {
    MongoClient,
    Database
  } from "https://deno.land/x/mongo@v0.31.1/mod.ts";

  let db: Database

export async function connectDb(){

    const client = new MongoClient();

    await client.connect('mongodb://127.0.0.1:27017')

    db = client.database('shop')

    console.log('db', db)
}


export function getDB() {
    return db
}
