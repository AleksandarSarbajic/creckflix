import { MongoClient, ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://sleasarbajic:FIEzTsepUaCSR79i@creck.ougdyzb.mongodb.net/users?retryWrites=true&w=majority"
    );
    const db = client.db();
    const passwords = data.passwords;
    const userCollection = db.collection("users");

    const account = await userCollection
      .find({ _id: new ObjectId(data._id) })
      .toArray();
    if (account[0].password === passwords.currentPassword) {
      if (
        account[0].password !== passwords.newPassword &&
        passwords.newPassword === passwords.enteredPassword
      ) {
        const update = await userCollection.updateOne(
          { _id: new ObjectId(data._id) },
          { $set: { password: `${passwords.newPassword}` } }
        );
        res.status(200).json({ message: "updated" });
      } else {
        res.status(401).json({ message: "bad passwords" });
      }
    } else {
      res.status(403).json({ message: "wrong password" });
    }
    client.close();

    // res.status(201).json(passwords);
  }
}
