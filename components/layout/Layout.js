import MainNavigation from "./MainNavigation";
import classes from "components/layout/Layout.module.css";
import { Inter } from "next/font/google";
import Footer from "./Footer";
import { useRouter } from "next/router";

const inter = Inter({
  weight: ["500", "400", "600", "700"],
  subsets: ["latin"],
});
function Layout(props) {
  const router = useRouter();

  return (
    <div
      className={`${router.pathname === "/" ? classes.color : ""} ${
        classes.layout
      }`}
    >
      {router.pathname === "/[watch]" ? (
        ""
      ) : router.pathname === "/menage" ? (
        ""
      ) : (
        <MainNavigation />
      )}
      <main className={inter.className}>{props.children}</main>
      {router.pathname === "/[watch]" ? (
        ""
      ) : router.pathname === "/menage" ? (
        ""
      ) : (
        <Footer />
      )}
    </div>
  );
}
export default Layout;
