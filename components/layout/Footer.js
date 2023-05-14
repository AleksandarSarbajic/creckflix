import classes from "../layout/Footer.module.css";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";

const inter = Inter({
  weight: ["500", "400", "600", "700", "300"],
  subsets: ["latin"],
});
export default function Footer() {
  const router = useRouter();

  return (
    <footer
      className={`${classes.footer} ${inter.className} ${
        router.pathname === "/yourAccount" ||
        router.pathname === "/email" ||
        router.pathname === "/password" ||
        router.pathname === "/email/[change]"
          ? classes.white
          : ""
      }`}
    >
      <ul className={classes.list}>
        <li className={classes.item}>
          <Link href="/browse" className={classes.icons}>
            <FaFacebookF className={classes.icon} />
            <FaInstagram className={classes.icon} />
            <FaYoutube className={classes.icon} />
          </Link>
        </li>
        <li className={classes.item}>
          <Link href="/browse" className={classes.link}>
            Audio Description
          </Link>
        </li>
        <li className={classes.item}>
          <Link href="/browse" className={classes.link}>
            Investor Relations
          </Link>
        </li>
        <li className={classes.item}>
          <Link href="/browse" className={classes.link}>
            Legal Notices
          </Link>
        </li>
        <li className={`${classes.item} ${classes.box}`}>
          <Link href="/browse" className={`${classes.link}`}>
            Service Code
          </Link>
        </li>
        <li className={classes.item}>&copy; 2023-2023 Crecflix, Inc.</li>
      </ul>
      <ul className={classes.list}>
        <li className={classes.item}>
          <Link href="/browse" className={classes.link}>
            Help Center
          </Link>
        </li>
        <li className={classes.item}>
          <Link href="/browse" className={classes.link}>
            Jobs
          </Link>
        </li>
        <li className={classes.item}>
          <Link href="/browse" className={classes.link}>
            Cookie Preferences
          </Link>
        </li>
      </ul>
      <ul className={classes.list}>
        <li className={classes.item}>
          <Link href="/browse" className={classes.link}>
            Gift Cards
          </Link>
        </li>
        <li className={classes.item}>
          <Link href="/browse" className={classes.link}>
            Terms of use
          </Link>
        </li>
        <li className={classes.item}>
          <Link href="/browse" className={classes.link}>
            Corporate Information
          </Link>
        </li>
      </ul>
      <ul className={classes.list}>
        <li className={classes.item}>
          <Link href="/browse" className={classes.link}>
            Media Center
          </Link>
        </li>
        <li className={classes.item}>
          <Link href="/browse" className={classes.link}>
            Privacy
          </Link>
        </li>
        <li className={classes.item}>
          <Link href="/browse" className={classes.link}>
            Contact Us
          </Link>
        </li>
      </ul>
    </footer>
  );
}
