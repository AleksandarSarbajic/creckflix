import { useRouter } from "next/router";
import Head from "next/head";
import { useEffect, useState } from "react";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import classes from "../[watch]/Watch.module.css";

export default function Player() {
  const route = useRouter();
  const [video, setVideo] = useState([]);

  const query = route.query.q;

  // if (query === undefined) {
  //   route.push("/browse");
  // }

  useEffect(() => {
    const id = query;
    let url = `https://iframe.mediadelivery.net/embed/119116/${id}?autoplay=false&preload=false`;
    setVideo(
      <div className="kurac">
        <iframe
          src={url}
          loading="lazy"
          className="picka"
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
          allowFullScreen={true}
        ></iframe>
      </div>
    );
  }, [query]);
  return (
    <>
      <Head>
        <title>Creckflix</title>
        <meta name="watch" content="watch a movie"></meta>
      </Head>
      <Link href="/browse" className={classes.link}>
        <BsArrowLeft className={classes.icon} />
      </Link>
      {video}
    </>
  );
}
