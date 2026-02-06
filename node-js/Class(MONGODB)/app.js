const { MongoClient } = require('mongodb');
console.log(MongoClient);
const url =  "mongodb+srv://humzarehman779:cluster0.fnf1uz4.mongodb.net/"
const client = new MongoClient(url)
console.log(client);

let datab = "classOne"
let collection ="data"

  const data = {
    name: 'Ali Aftab',
    role: 'Teacher',
    insitute: "Smit"
  }

async function main() {
 await client.connect()
 console.log('Connected successfully to server');   
 datab = await client.db(datab)
 collection = datab.collection(collection) 

const insertResult = await collection.insertOne(data);
console.log('Inserted documents =>', insertResult);
 
 
}
main()
.then(console.log)
.catch(console.error)
.finally(()=>client.close())
