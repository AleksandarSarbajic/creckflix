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
  const checkRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const user = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      stayLogin: checkRef.current.checked,
      likedMovies: [],
    };
    props.onLogin(user);
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
      <h2 className={classes.text}>Sign Up</h2>
      <form onSubmit={submitHandler} className={classes.form}>
        <input
          type="email"
          placeholder="email@example.com"
          id="email"
          ref={emailRef}
          required
          onBlur={onBlurEmailHandler}
        />
        {email}
        <input
          type="password"
          placeholder="password"
          id="password"
          ref={passwordRef}
          required
          onBlur={onBlurPasswordHandler}
        />
        {password}
        {props.error && <span className={classes.invalid}>{props.error}</span>}
        <button
          type="submit"
          className={classes.button + " " + inter.className}
        >
          Login
        </button>
        <div className={classes.remember}>
          <div className={classes.check}>
            <input type="checkbox" id="check" ref={checkRef} />
            <label htmlFor="check">Remember me</label>
          </div>
          <Link href="/" className={classes.link}>
            Need Help?
          </Link>
        </div>
        <p className={classes.sign}>
          New to Creckflix?{" "}
          <Link href="/sign-up" className={classes.color}>
            Sign up now
          </Link>
        </p>
      </form>
    </div>
  );
}
export default LoginForm;
