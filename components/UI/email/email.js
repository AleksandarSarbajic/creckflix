import classes from "../email/email.module.css";
import { useRef, useState } from "react";
import { useRouter } from "next/router";
import { HiOutlineShieldCheck } from "react-icons/hi";
import { BsChevronRight } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { Inter } from "next/font/google";
const inter = Inter({
  weight: ["500", "400", "600", "700"],
  subsets: ["latin"],
});
export default function ChangeEmail(props) {
  const route = useRouter();
  console.log(props.email);
  function onSubmitHandler(e) {
    // console.log(user);

    props.onClick();
  }
  function moveToPasswordHandler(e) {
    // console.log(user);
    route.push("/password");
  }

  return (
    <div className={`${classes.bg} `}>
      <HiOutlineShieldCheck className={classes.icon} />
      <h1 className={classes.heading}>Let's confirm your indentity.</h1>
      <p className={classes.subheading}>
        Before you make any changes, we'll just need to make sure it's you.
      </p>

      <div className={classes.buttons}>
        <button
          className={`${classes.box} ${inter.className} ${classes.first}`}
          onClick={onSubmitHandler}
        >
          <div className={classes.inner}>
            <MdOutlineEmail className={classes.red} />
            <div className={classes.text}>
              <p className={classes.bold}>{props.email}</p>
              <p className={classes.email}>email</p>
            </div>
          </div>
          <BsChevronRight className={classes.arrow} />
        </button>
        <button
          className={`${classes.box} ${inter.className} ${classes.second}`}
          onClick={moveToPasswordHandler}
        >
          <div className={classes.inner}>
            <MdOutlineEmail className={classes.red} />
            <div className={classes.text}>
              <p className={classes.bold}>Change a password</p>
              <p className={classes.email}>email</p>
            </div>
          </div>
          <BsChevronRight className={classes.arrow} />
        </button>
      </div>
    </div>
  );
}
