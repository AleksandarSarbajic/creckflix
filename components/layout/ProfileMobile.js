import Link from "next/link";
import classes from "../layout/ProfileMobile.module.css";
import { useRouter } from "next/router";

import { useEffect, useState } from "react";
export default function ProfileMobile() {
  const route = useRouter();
  const [image, setImage] = useState("");
  const [id, setId] = useState("");
  useEffect(() => {
    const url = localStorage.getItem("image");
    const id = localStorage.getItem("token");
    setImage(url);
    setId(id);
  }, []);
  function LogOutUserHandler() {
    localStorage.removeItem("image");
    localStorage.removeItem("token");
    localStorage.removeItem("login");
    route.push("/");
  }
  return (
    <div className={classes.container}>
      <img src={image} className={classes.image} />
      <Link className={classes.link} href={`/menage?q=${id}`}>
        Menage Profile
      </Link>
      <Link className={classes.link} href="/yourAccount">
        Account
      </Link>
      <Link className={classes.link} href="/helpcenter">
        Help center
      </Link>
      <p className={classes.button} onClick={LogOutUserHandler}>
        Sign out of Creckflix
      </p>
      <div className={classes.outline} />
    </div>
  );
}
