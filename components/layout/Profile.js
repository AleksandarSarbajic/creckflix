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

  useEffect(() => {
    const url = localStorage.getItem("image");
    setImage(url);
  }, []);
  function LogOutUserHandler() {
    localStorage.removeItem("image");
    localStorage.removeItem("token");
    localStorage.removeItem("login");
    route.push("/");
  }
  return (
    <>
      <img src={image} className={classes.image} />
      <span className={classes.rotate}>&#10094;</span>
      <ul className={classes.listed}>
        <li className={classes.item}>
          <Link href={"/browse"} className={classes.link}>
            <GoPencil className={classes.icon} /> Menage Profiles
          </Link>
        </li>
        <li className={classes.item}>
          <Link href={"/yourAccount"} className={classes.link}>
            <AiOutlineUser className={classes.icon} />
            Account
          </Link>
        </li>
        <li className={classes.item}>
          <Link href={"/browse"} className={classes.link}>
            <BiHelpCircle className={classes.icon} />
            Help Center
          </Link>
        </li>

        <button className={classes.button} onClick={LogOutUserHandler}>
          Sign out from Creckflix
        </button>
      </ul>
    </>
  );
}
