import ChangeEmail from "@/components/UI/email/email";
import { useRouter } from "next/router";
import { useState } from "react";
import { MongoClient } from "mongodb";
export default function Email(props) {
  const route = useRouter();

  let id;
  if (typeof window !== "undefined") {
    id = localStorage.getItem("token");
  } else {
  }
  const user = props.users.filter((item) => item._id === id);
  console.log(user);

  async function sendEmailHandler() {
    try {
      const user = { _id: id };
      const response = await fetch("/api/email", {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div style={{ background: "#eee" }}>
      <ChangeEmail onClick={sendEmailHandler} email={user[0].email} />
    </div>
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
