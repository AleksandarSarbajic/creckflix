import { MongoClient, ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://sleasarbajic:FIEzTsepUaCSR79i@creck.ougdyzb.mongodb.net/users?retryWrites=true&w=majority"
    );
    const db = client.db();
    const info = data.info;
    const userCollection = db.collection("users");

    const account = await userCollection
      .find({ _id: new ObjectId(data._id) })
      .toArray();

    const update = await userCollection.updateOne(
      { _id: new ObjectId(data._id) },
      { $set: { image: info.image, name: info.name } }
    );
    res.status(200).json({ message: "Changed!" });
  }
}
