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
    try {
      const account = await userCollection.deleteOne({
        _id: new ObjectId(data._id),
      });
      res.status(200).json({ message: "Deleted!" });
    } catch (error) {
      res.status(404).json({ error });
    }
  }
}
