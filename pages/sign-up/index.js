import SingUp from "components/UI/SingUp.js";
import { useRouter } from "next/router";
import { useState } from "react";

// import { MongoClient } from "mongodb";
function SignUp(props) {
  const [exist, setExist] = useState(false);
  // console.log(props);
  const router = useRouter();
  async function createUserHandler(user) {
    const response = await fetch("/api/sign-up", {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();

    console.log(data);
    if (data.message === "Already have it") {
      setExist(true);
      return;
    }
    setExist(false);
    router.push("/");
  }
  return (
    <>
      <SingUp createUser={createUserHandler} exists={exist} />
    </>
  );
}

export default SignUp;

// export async function getStaticProps(context) {
//   console.log(context);
//   const client = await MongoClient.connect(
//     "mongodb+srv://sleasarbajic:FIEzTsepUaCSR79i@creck.ougdyzb.mongodb.net/users?retryWrites=true&w=majority"
//   );
//   const db = client.db();
//   const userCollection = db.collection("users");
//   const user = await userCollection.findOne({});
//   return { props: { userData: user._id.toString() } };
// }
