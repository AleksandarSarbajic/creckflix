import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import { IconContext } from "react-icons";

export default function App({ Component, pageProps }) {
  return (
    <IconContext.Provider value={{ className: "react-icons" }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </IconContext.Provider>
  );
}
