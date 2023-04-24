import LoginForm from "@/components/UI/Login";
import { useRouter } from "next/router";
import { useState } from "react";

function LoginPage() {
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();
  let checkLogin;
  if (typeof window !== "undefined") {
    // 👉️ can use localStorage here

    checkLogin = localStorage.getItem("login");
  } else {
    // 👉️ can't use localStorage
  }

  if (checkLogin === "true") {
    router.push("/browse");
  }

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
      localStorage.setItem("login", user.stayLogin);
      localStorage.setItem("token", account[0]._id);

      router.push("/browse");
    } else {
      setErrorMsg("Invalid email/password input!");
    }
  }
  return (
    <>
      <LoginForm onLogin={onLoginUser} error={errorMsg} />
    </>
  );
}
export default LoginPage;
