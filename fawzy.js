const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://elbashmohands1:0118549511Mm@cluster0.2zqyz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);



async function showDatabases(c) {
   const dbList = await c.db().admin().listDatabases();
   console.log("Databases: ");
     dbList.databases.forEach(db => {
        console.log( `-- ${db.name}`);
     });
 
};

async function createListing(c,d) {
  const result = await c.db("bashaforms").collection("posts")
  .insertOne(d);  
  console.log(result);
}




async function main() {

  try {
    await client.connect();
    // await showDatabases(client);
   console.log("connection established");
  } catch (e) {
    console.error(e);
  }
}

export default main;