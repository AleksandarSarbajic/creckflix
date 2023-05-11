import ChangePassword from "@/components/UI/password/password";
import { useRouter } from "next/router";
import { useState } from "react";
export default function Password() {
  const route = useRouter();
  const [errorMsg, setErrorMsg] = useState(false);
  const [errorNotSame, setErrorNotSame] = useState(false);
  let id;
  if (typeof window !== "undefined") {
    id = localStorage.getItem("token");
  } else {
  }

  async function changePasswordHandler(passwords) {
    try {
      const user = { passwords: passwords, _id: id };
      const response = await fetch("/api/password", {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        console.log(response);
        if (response.status === 403) {
          setErrorNotSame(true);
        } else {
          setErrorMsg(true);
        }

        throw new Error(`Error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        setErrorNotSame(false);
        setErrorMsg(false);
        route.push("/browse");
      }
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div style={{ background: "#eee" }}>
      <ChangePassword
        onClick={changePasswordHandler}
        errorMsg={errorMsg}
        errorNotSame={errorNotSame}
      />
      <p style={{ background: "#000" }}>{errorMsg}</p>
    </div>
  );
}
