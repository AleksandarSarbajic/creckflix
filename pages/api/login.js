import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "GET") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://sleasarbajic:FIEzTsepUaCSR79i@creck.ougdyzb.mongodb.net/users?retryWrites=true&w=majority"
    );
    const db = client.db();

    const userCollection = db.collection("users");

    const accounts = await userCollection.find().toArray();
    client.close();
    res.status(201).json(accounts);
  }
}

export default handler;
