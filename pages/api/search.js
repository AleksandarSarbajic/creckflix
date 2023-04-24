import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://sleasarbajic:FIEzTsepUaCSR79i@creck.ougdyzb.mongodb.net/users?retryWrites=true&w=majority"
    );
    const collection = client.db().collection("movies");

    // const userCollection = db.collection("movies");
    // const fil = await db.find().toArray();

    client.close();
  }
}

export default handler;
