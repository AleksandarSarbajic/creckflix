// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://sleasarbajic:FIEzTsepUaCSR79i@creck.ougdyzb.mongodb.net/users?retryWrites=true&w=majority"
    );
    const db = client.db();

    const userCollection = db.collection("users");
    console.log(data);
    const account = await userCollection.find({ email: data.email }).toArray();
    if (account.length > 0) {
      res.status(201).json({ message: "Already have it" });
      return;
    }

    const result = await userCollection.insertOne({
      ...data,
      stayLogin: false,
    });

    client.close();

    res.status(201).json({ message: "Inserted" });
  }
}

export default handler;
