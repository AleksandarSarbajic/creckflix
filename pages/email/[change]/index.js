import ChangePassword from "@/components/UI/changeEmail/changeEmail";
import { useRouter } from "next/router";
import { useState } from "react";
export default function Password() {
  const route = useRouter();
  const [errorMsg, setErrorMsg] = useState(false);
  const [errorNotSame, setErrorNotSame] = useState(false);

  async function changePasswordHandler(emails) {
    try {
      const user = { emails, _id: route.query.change };
      const response = await fetch("/api/changeEmail", {
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
