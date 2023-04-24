import { MongoClient, ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { movie, _id } = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://sleasarbajic:FIEzTsepUaCSR79i@creck.ougdyzb.mongodb.net/users?retryWrites=true&w=majority"
    );
    const db = client.db();

    const userCollection = db.collection("users");

    const accounts = await userCollection.find().toArray();
    const filteredMovies = accounts[0].likedMovies.filter(
      (item) => item !== movie
    );
    const deleteMovie = accounts[0].likedMovies.filter(
      (item) => item === movie
    );

    if (deleteMovie.length !== 0) {
      const insert = await userCollection.updateOne(
        { _id: new ObjectId(_id) },
        { $set: { likedMovies: [...filteredMovies] } }
      );
    } else {
      const insert = await userCollection.updateOne(
        { _id: new ObjectId(_id) },
        { $set: { likedMovies: [...filteredMovies, movie] } }
      );
    }
    const updatedAccounts = await userCollection
      .find({ _id: new ObjectId(_id) })
      .toArray();

    client.close();
    res.status(201).json({ message: "inserted" });
  }
}
