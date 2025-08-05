const { MongoClient } = require("mongodb");
const eCommerceSchemas = require("./eCommerceSchema");
require('dotenv').config({ path: "../.env" });

async function createEcommerceCollections() {
  const uri = process.env.MONGODB_URI;
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
