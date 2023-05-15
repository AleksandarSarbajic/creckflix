import { useEffect, useState } from "react";
import classes from "../layout/Profile.module.css";
import Link from "next/link";
import { GoPencil } from "react-icons/go";
import { BiHelpCircle } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { useRouter } from "next/router";
export default function (props) {
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
      <span className={classes.rotate}>&#10094;</span>
      <ul className={classes.listed}>
        <li className={classes.item}>
          <Link href={`/menage?q=${id}`} className={classes.link}>
            <GoPencil className={classes.icon} /> Menage Profile
          </Link>
        </li>
        <li className={classes.item}>
          <Link href={"/yourAccount"} className={classes.link}>
            <AiOutlineUser className={classes.icon} />
            Account
          </Link>
        </li>
        <li className={classes.item}>
          <Link href={"/helpcenter"} className={classes.link}>
            <BiHelpCircle className={classes.icon} />
            Help Center
          </Link>
        </li>

        <button className={classes.button} onClick={LogOutUserHandler}>
          Sign out from Creckflix
        </button>
      </ul>
    </div>
  );
}
