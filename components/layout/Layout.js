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
      <MainNavigation></MainNavigation>
      <main className={inter.className}>{props.children}</main>
      <Footer />
    </div>
  );
}
export default Layout;
