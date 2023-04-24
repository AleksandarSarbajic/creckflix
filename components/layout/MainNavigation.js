import Image from "next/image";
import Link from "next/link";
import logo from "public/img/logo.png";
import classes from "components/layout/MainNavigation.module.css";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";

import Search from "./Search";
const inter = Inter({
  weight: ["500", "400", "600", "700"],
  subsets: ["latin"],
});

export default function MainNavigation() {
  const route = useRouter();
  // console.log(route);
  let login;
  let id;
  if (typeof window !== "undefined") {
    id = localStorage.getItem("token");
  } else {
  }
  if (route.pathname === "/") {
    login = (
      <li>
        <Link href="/login" className={classes.link + " " + inter.className}>
          Login
        </Link>
      </li>
    );
  } else if (
    route.pathname !== "/" &&
    route.pathname !== "/login" &&
    route.pathname !== "/sign-up"
  ) {
    login = (
      <>
        <li>
          <Search />
        </li>
      </>
    );
  }

  return (
    <header className={`${classes.header} ${inter.className}`}>
      <div className={classes.logo}>
        <Link
          href={
            route.pathname !== "/" &&
            route.pathname !== "/login" &&
            route.pathname !== "/sign-up"
              ? "/browse"
              : "/"
          }
        >
          <Image src={logo} alt="Logo" priority className={classes.img} />
        </Link>
        {route.pathname !== "/" &&
        route.pathname !== "/login" &&
        route.pathname !== "/sign-up" ? (
          <div className={classes.links}>
            <Link href={`/browse`} className={classes.browse}>
              Home
            </Link>
            <Link href={"/"} className={classes.browse}>
              TV Shows
            </Link>
            <Link href={"/movies"} className={classes.browse}>
              Movies
            </Link>
            <Link href={`/browse/mylist:${id}`} className={classes.browse}>
              My list
            </Link>
            <Link href={"/"} className={classes.browse}>
              New & Popular
            </Link>
          </div>
        ) : null}
      </div>
      <nav>
        <ul>{login}</ul>
      </nav>
    </header>
  );
}
