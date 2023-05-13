import Hero from "@/components/UI/Hero";
import Head from "next/head";

import Outline from "@/components/layout/Outline";
import ShowGuide from "@/components/UI/ShowGuide";
import UseStayIn from "@/components/custom hook/UseStayIn";

export default function Home() {
  UseStayIn();
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <header style={{ background: "rgba(0, 8, 29, 1)" }}>
        <Hero></Hero>
        <Outline />
        <ShowGuide />
      </header>
    </>
  );
}
