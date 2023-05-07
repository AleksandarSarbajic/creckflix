import { useState, useEffect } from "react";
import { MongoClient } from "mongodb";
import Account from "@/components/UI/Account/account";

export default function YourAccount(props) {
  let id = "";
  if (typeof window !== "undefined") {
    id = localStorage.getItem("token");
  } else {
  }

  const filteredUser = props.users.filter((item) => item._id === id);
  return (
    <div className="white-bg">
      <Account user={filteredUser} />
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
