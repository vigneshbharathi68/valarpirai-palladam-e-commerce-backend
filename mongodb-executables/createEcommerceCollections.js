const { MongoClient } = require("mongodb");
const eCommerceSchemas = require("./eCommerceSchema");
require('dotenv').config();

console.log({eCommerceSchemas})

async function createEcommerceCollections() {
  const uri = process.env.mongodb_connection_string;
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db("ecommerce");
    for (const [name, options] of Object.entries(eCommerceSchemas)) {
      await db.createCollection(name, options);
      console.log(`✅ Created collection: ${name}`);
    }
  } catch (err) {
    console.error("❌ Error creating collections:", err);
  } finally {
    await client.close();
  }
}

createEcommerceCollections();
