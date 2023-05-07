import classes from "components/UI/Login.module.css";
import { Inter } from "next/font/google";
import Link from "next/link";

import { useRef, useState } from "react";

const inter = Inter({
  weight: ["500", "400", "600"],
  subsets: ["latin"],
});
const urls = {
  one: "https://occ-0-7593-1490.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABWdAPWT0Vb3Eth37phC9Wplk4PJYY04xKlrvLf6eD_pjXTNUMjeq7Q8DgqgYbj8qbJr-766Vmg-Z3YSsEOxObXKphMTFZd-A8g.png?r=bd7",
  two: "https://occ-0-7593-1490.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABUoj4FT-0Rr558WbETiintMnmH2JKw4l_p4MdMoxqVx7YXwsvLvvnGUtx3HKZN_BJFH4EHpXn5KqSCBVxLrRz0n4gk64yyeAFw.png?r=229",
  three:
    "https://occ-0-7593-1490.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABfMnIhIdkM8LdU5BZaYVaxoVTrMGzIjafPBzCQUwebzxeK7JKvcI7-Jm-5AituzcdJYIT_45NSkbbTwfVva-E01G9J1YVVBveA.png?r=e6e",
  four: "https://occ-0-7593-1490.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABZf5kiIAuiZG_DvLse1xSkgukFUqHQQR5d6qSDQBlw720nd7cYHcXavvtFNfg5814g1njOdPHGbrKYs9KdWq9hnEqL2-xxh5MA.png?r=1d4",
};
function LoginForm(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [image, setImage] = useState(urls.one);
  const date = new Date();
  console.log(date.toDateString());

  const emailRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();
  function submitHandler(event) {
    event.preventDefault();

    const user = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      stayLogin: false,
      likedMovies: [],
      image: image,
      date: date.toDateString(),
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
  function SetIconHandler(e) {
    e.preventDefault();

    setImage(() => e.target.value);
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
        <div className={classes.profiles}>
          <input
            type="image"
            value={urls.one}
            src={urls.one}
            onClick={SetIconHandler}
            className={`${classes.profile} ${
              urls.one === image ? classes.selected : ""
            }`}
          />
          <input
            type="image"
            value={urls.two}
            src={urls.two}
            onClick={SetIconHandler}
            className={`${classes.profile} ${
              urls.two === image ? classes.selected : ""
            }`}
          />
          <input
            type="image"
            value={urls.three}
            src={urls.three}
            onClick={SetIconHandler}
            className={`${classes.profile} ${
              urls.three === image ? classes.selected : ""
            }`}
          />
          <input
            type="image"
            value={urls.four}
            src={urls.four}
            onClick={SetIconHandler}
            className={`${classes.profile} ${
              urls.four === image ? classes.selected : ""
            }`}
          />
        </div>
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
