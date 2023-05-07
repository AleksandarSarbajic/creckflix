import LoginForm from "@/components/UI/Login";
import { useRouter } from "next/router";
import { useState } from "react";
import Head from "next/head";
import UseStayIn from "@/components/custom hook/UseStayIn";
function LoginPage() {
  UseStayIn();
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();

  async function onLoginUser(user) {
    const response = await fetch("/api/login", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();

    const account = data.filter(
      (item) => item.email === user.email && item.password === user.password
    );
    if (account.length > 0) {
      localStorage.setItem("login", true);
      localStorage.setItem("token", account[0]._id);
      localStorage.setItem("image", account[0].image);

      router.push("/browse");
    } else {
      setErrorMsg("Invalid email/password input!");
    }
  }
  return (
    <>
      <Head>
        <title>Creckflix</title>
        <meta name="login" content="login to website"></meta>
      </Head>
      <LoginForm onLogin={onLoginUser} error={errorMsg} />
    </>
  );
}
export default LoginPage;
