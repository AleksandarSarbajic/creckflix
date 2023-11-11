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
    let url = `https://iframe.mediadelivery.net/play/172259/323a46ff-c280-442c-9c77-478158ee0d97`;
    setVideo(
      <div className={classes.position}>
        <iframe
          src={url}
          loading="lazy"
          className={classes.size}
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
        <meta name="watch" content="watch a movie!"></meta>
      </Head>
      <Link href="/browse" className={classes.link}>
        <BsArrowLeft className={classes.icon} />
      </Link>
      {video}
    </>
  );
}
