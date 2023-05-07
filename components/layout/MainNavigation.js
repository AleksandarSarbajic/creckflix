import Image from "next/image";
import Link from "next/link";
import logo from "public/img/logo.png";
import classes from "components/layout/MainNavigation.module.css";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect, useCallback, useState } from "react";
import Search from "./Search";
import { IoIosMenu } from "react-icons/io";
import Profile from "./Profile";
const inter = Inter({
  weight: ["500", "400", "600", "700"],
  subsets: ["latin"],
});

export default function MainNavigation() {
  const route = useRouter();

  const [navClass, setNavClass] = useState("");
  const [showSideBar, setShowSideBar] = useState("");
  const [scrollY, setScrollY] = useState(0);
  const onScroll = useCallback(() => {
    const { pageYOffset } = window;

    setScrollY(pageYOffset);

    if (pageYOffset >= 150 && pageYOffset <= 300) {
      setNavClass(classes.bg);
    } else if (pageYOffset <= 150) {
      setNavClass(classes.relative);
    }
  }, [classes.translate, showSideBar]);

  useEffect(() => {
    //add eventlistener to window
    window.addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
    };
  }, []);

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
    route.pathname !== "/youAccount" &&
    route.pathname !== "/sign-up"
  ) {
    login = (
      <>
        <li>
          <Search />
        </li>
        <li>
          <Profile />
        </li>
      </>
    );
  } else if (
    route.pathname === "/youAccount" &&
    route.pathname !== "/" &&
    route.pathname !== "/login" &&
    route.pathname !== "/sign-up"
  ) {
    login = (
      <li>
        <Profile />
      </li>
    );
  }
  function showHiddenSideBar() {
    if (showSideBar === classes.translate) {
      setShowSideBar("");
      if (scrollY >= 300) {
      } else {
        setNavClass(classes.relative);
      }
    } else {
      setShowSideBar(classes.translate);
      setNavClass(classes.bg);
    }
  }

  return (
    <>
      <div className={classes.main}>
        <nav
          className={`${classes.header} ${inter.className} ${navClass} ${
            showSideBar === classes.translate ? classes.bg : ""
          }`}
        >
          <div className={classes.logo}>
            <button className={classes.button} onClick={showHiddenSideBar}>
              <IoIosMenu className={classes.icon} />
            </button>
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
            route.pathname !== "/yourAccount" &&
            route.pathname !== "/sign-up" ? (
              <div className={`${classes.links} ${showSideBar}`}>
                <Link
                  href={`/browse`}
                  className={`${classes.browse} ${
                    route.pathname === "/browse" ? classes.highlighted : ""
                  }`}
                >
                  Home
                </Link>
                <Link
                  href={"/"}
                  className={`${classes.browse} ${
                    route.pathname === "/sign-up" ? classes.highlighted : ""
                  }`}
                >
                  TV Shows
                </Link>
                <Link
                  href={"/movies"}
                  className={`${classes.browse} ${
                    route.pathname === "/movies" ? classes.highlighted : ""
                  }`}
                >
                  Movies
                </Link>
                <Link
                  href={`/browse/mylist:${id}`}
                  className={`${classes.browse} ${
                    route.pathname === "/browse/[mylist]"
                      ? classes.highlighted
                      : ""
                  }`}
                >
                  My list
                </Link>
                <Link href={"/"} className={classes.browse}>
                  New & Popular
                </Link>
              </div>
            ) : null}
          </div>
          <div>
            <ul>{login}</ul>
          </div>
        </nav>
      </div>
      {showSideBar === classes.translate ? (
        <div className={classes.backdrop} onClick={showHiddenSideBar} />
      ) : (
        ""
      )}
    </>
  );
}
