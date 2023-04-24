import Link from "next/link";
import classes from "../UI/Hero.module.css";
import { FiChevronRight } from "react-icons/fi";
function Hero() {
  return (
    <>
      <div className={classes.hero}>
        <h1 className={classes.header}>
          Unlimited movies, TV shows, and more.
        </h1>
        <p className={classes.text}>
          Everything to watch for free at one place.{" "}
        </p>
        <p className={classes.textSecond}>
          Ready to watch? Create account and start watching for free!
        </p>
        <Link href="sign-up" className={classes.link}>
          Get Started <FiChevronRight className={classes.icon} />
        </Link>
      </div>
    </>
  );
}

export default Hero;
