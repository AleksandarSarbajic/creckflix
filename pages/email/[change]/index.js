import { MongoClient } from "mongodb";
export default function EmailChange(props) {
  return <p>dsdsdsd</p>;
}
export async function getServerSideProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://sleasarbajic:FIEzTsepUaCSR79i@creck.ougdyzb.mongodb.net/users?retryWrites=true&w=majority"
  );
  const db = client.db();

  const userCollection = db.collection("users");

  const user = await userCollection.find().toArray();

  return {
    props: {
      users: user.map((item) => ({
        _id: item._id.toString(),
        name: item.name,
        email: item.email,
        password: item.password,
        image: item.image,
        date: item.date,
      })),
    },
  };
}
