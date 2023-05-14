import MenageAccount from "@/components/UI/Menager/MenageAccount";
import { MongoClient } from "mongodb";
import { useRouter } from "next/router";
export default function Menage(props) {
  const route = useRouter();
  const id = route.query.q;
  const user = props.users.filter((item) => item._id === id);
  console.log(user);
  return (
    <>
      <MenageAccount user={user[0]} />
    </>
  );
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
