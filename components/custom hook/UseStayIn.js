import { useRouter } from "next/router";
import { useEffect } from "react";
export default function UseStayIn(props) {
  const router = useRouter();

  useEffect(() => {
    let checkLogin;
    if (typeof window !== "undefined") {
      // 👉️ can use localStorage here

      checkLogin = localStorage.getItem("login");
    } else {
      // 👉️ can't use localStorage
    }

    if (checkLogin !== "true") {
      if (
        router.pathname === "/browse" ||
        router.pathname === "/browse/[mylist]" ||
        router.pathname === "/search" ||
        router.pathname === "/movies"
      ) {
        router.push("/");
      }
    }
    if (
      checkLogin === "true" &&
      router.pathname !== "/search" &&
      router.pathname !== "/browse/[mylist]" &&
      router.pathname !== "/browse" &&
      router.pathname !== "/movies"
    ) {
      router.push("/browse");
    }
  }, []);
}
