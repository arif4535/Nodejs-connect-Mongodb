// const MongoClient = require('mongodb').MongoClient;
// const URL = 'mongodb://127.0.0.1:27017';

// async function main() {
//   const client = await MongoClient.connect(URL);
//   const db = client.db('test');

//   const collection = await db.collection('person');
//   let veri = { adi: 'arif', soyadi: 'degirmenci' };
//   const result = await collection.insertOne(veri);
//   console.log('Başarılı bir şekilde eklendi. InsertId: %s', result.insertedId);

//   client.close();
// }

// main();
const {MongoClient}=require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const dbname='test';
const client=new MongoClient(url);

async function getData(){
    let result =await client.connect();
    db=result.db(dbname);
    collection=db.collection('person');
    let data =await collection.find({}).toArray();
    console.log(data)
}
getData();
