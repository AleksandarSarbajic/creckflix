import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MongoClient } from "mongodb";
import { ColorRing } from "react-loader-spinner";
import classes from "../search/Index.module.css";
import SearchedMovies from "@/components/UI/Search/SearchedMovies";
import Link from "next/link";

export default function Search(props) {
  const { query, push } = useRouter();
  let id;
  if (typeof window !== "undefined") {
    id = localStorage.getItem("token");
  } else {
  }
  const filteredUser = props.users.filter((item) => item._id === id);
  useEffect(() => {
    if (filteredUser.length === 0) {
      push("/login");
    }
  }, [filteredUser]);
  const [products, setProducts] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    setisLoading(true);
    async function createUserHandler() {
      try {
        const response = await fetch(
          `https://eu-central-1.aws.data.mongodb-api.com/app/application-0-nizpq/endpoint/search?movie=${query.q}`
        );
        const data = await response.json();

        setProducts(() => data);
      } catch (error) {
        console.error(error);
      }
    }

    setTimeout(() => {
      createUserHandler();
      setisLoading(false);
    }, 1500);
  }, [query]);

  return (
    <>
      <Head>
        <title>Creckflix</title>
        <meta name="browse" content="search movies"></meta>
      </Head>
      {!isLoading && (
        <h2 className={classes.header}>
          <span className={classes.colored}>Results for: </span>
          {query.q}
        </h2>
      )}
      {isLoading && (
        <div className={classes.loader}>
          <ColorRing
            visible={isLoading}
            height="100"
            width="100"
            ariaLabel="blocks-loading"
            wrapperClass="blocks-wrapper"
            colors={["#e50914", "#e50914", "#e50914", "#e50914", "#e50914"]}
          />
        </div>
      )}
      {products.length === 0 && !isLoading ? (
        <p className={classes.loader}>
          No movies were found
          <Link href="/browse" className={classes.link}>
            &nbsp; Home page.
          </Link>
        </p>
      ) : (
        ""
      )}
      {!isLoading && products.length !== 0 && (
        <SearchedMovies movies={products} id={id} user={filteredUser} />
      )}
    </>
  );
}
export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://sleasarbajic:FIEzTsepUaCSR79i@creck.ougdyzb.mongodb.net/users?retryWrites=true&w=majority"
  );
  const db = client.db();

  const userCollection = db.collection("users");

  const user = await userCollection.find().toArray();

  return {
    props: {
      users: user.map((item) => ({
        _id: item._id.toString(),
        name: item.name,
        likedMovies: item.likedMovies,
      })),
    },
  };
}
