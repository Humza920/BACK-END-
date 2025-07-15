const { MongoClient } = require('mongodb');
console.log(MongoClient);
const url = "mongodb+srv://humzarehman779:<>pass<>@cluster0.fnf1uz4.mongodb.net/"
const client = new MongoClient(url)
console.log(client);

let datab = "classOne"
let collection ="data"

async function main() {
 await client.connect()
 console.log('Connected successfully to server');   
 datab = await client.db(datab)
 console.log(datab.collection(collection) + "database");
 
 
}
main()