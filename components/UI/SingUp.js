import classes from "components/UI/Login.module.css";
import { Inter } from "next/font/google";
import Link from "next/link";

import { useRef, useState } from "react";

const inter = Inter({
  weight: ["500", "400", "600"],
  subsets: ["latin"],
});
function LoginForm(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const emailRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const user = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    props.createUser(user);
  }

  function onBlurEmailHandler() {
    if (emailRef.current.value.includes("@")) {
      setEmail(null);
    } else {
      setEmail(<p className={classes.error}>Plese enter valid email</p>);
    }
  }
  function onBlurPasswordHandler() {
    if (passwordRef.current.value.length >= 8) {
      setPassword(null);
    } else {
      setPassword(
        <p className={classes.error}>
          Your password must contain between 8 and 60 characters.
        </p>
      );
    }
  }

  return (
    <div className={classes.modal + " " + inter.className}>
      <h2 className={classes.text}>Sign In</h2>
      <form onSubmit={submitHandler} className={classes.form}>
        <input
          type="text"
          placeholder="Aleksandar"
          id="name"
          ref={nameRef}
          required
        />

        <input
          type="email"
          placeholder="email@example.com"
          id="email"
          ref={emailRef}
          required
          onBlur={onBlurEmailHandler}
        />
        {email}
        {props.exists && (
          <label className={classes.error} htmlFor="email">
            Account with this email already exists
          </label>
        )}

        <input
          type="password"
          placeholder="password"
          id="password"
          ref={passwordRef}
          required
          onBlur={onBlurPasswordHandler}
        />
        {password}
        <button
          type="submit"
          className={classes.button + " " + inter.className}
        >
          Sign up
        </button>

        <Link href="/" className={classes.link}>
          Need Help?
        </Link>

        <p className={classes.sign}>
          Already have account?{" "}
          <Link href="/login" className={classes.color}>
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
export default LoginForm;
