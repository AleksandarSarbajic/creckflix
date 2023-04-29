import Hero from "@/components/UI/Hero";
import Head from "next/head";

import Outline from "@/components/layout/Outline";
import ShowGuide from "@/components/UI/ShowGuide";

export default function Home() {
  return (
    <>
      <Head>
        <title>Creckflix</title>
        <meta name="creckflix" content="movies website"></meta>
      </Head>

      <header style={{ background: "rgba(0, 8, 29, 1)" }}>
        <Hero></Hero>
        <Outline />
        <ShowGuide />
      </header>
    </>
  );
}
