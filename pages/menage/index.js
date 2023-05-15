import MenageAccount from "@/components/UI/Menager/MenageAccount";
import { MongoClient } from "mongodb";
import { useRouter } from "next/router";
import Head from "next/head";
export default function Menage(props) {
  const route = useRouter();
  const id = route.query.q;
  const user = props.users.filter((item) => item._id === id);

  async function deletAccountHandler() {
    try {
      const user = { _id: id };
      const response = await fetch("/api/delete", {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        if (response.status === 404) {
        } else {
        }

        throw new Error(`Error! status: ${response.status}`);
      }
      const data = await response.json();

      if (response.ok) {
        localStorage.removeItem("image");
        localStorage.removeItem("token");
        localStorage.removeItem("login");
        route.push("/");
      }
    } catch (error) {
      console.error(error);
    }
  }
  async function changeAccountHandler(info) {
    try {
      const user = { info, _id: id };
      const response = await fetch("/api/menage", {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        console.log(response);
        if (response.status === 403) {
        } else {
        }

        throw new Error(`Error! status: ${response.status}`);
      }
      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("image", info.image);
        route.push("/browse");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Head>
        <title>Creckflix</title>
        <meta name="menage" content="menage account"></meta>
      </Head>
      <MenageAccount
        user={user[0]}
        change={changeAccountHandler}
        delete={deletAccountHandler}
      />
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
