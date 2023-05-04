import Head from "next/head";

import { MongoClient } from "mongodb";
import LikedMovies from "@/components/UI/LikedMovies";
import Removed from "@/components/layout/Removed";
import { useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";

import { useRouter } from "next/router";

export default function MyList(props) {
  const router = useRouter();
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 2000);
  }, []);

  let id;
  if (typeof window !== "undefined") {
    id = localStorage.getItem("token");
  } else {
  }
  useEffect(() => {
    if (id === null) {
      router.push("/login");
    }
  }, [id]);

  const [isClicked, setIsClicked] = useState(false);
  const [removedMovie, setRemovedMovie] = useState([]);
  function ShowRemovedMovieHandler(validation, movie) {
    setIsClicked(validation);
    setRemovedMovie(movie);
  }
  const query = router.query.mylist.slice(7);

  return (
    <>
      <Head>
        <title>Creckflix</title>
        <meta name="creckflix" content="movies website"></meta>
      </Head>
      {isLoading && (
        <div className="loader">
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
      {!isLoading && (
        <LikedMovies
          movies={props.movies}
          user={props.users}
          onClick={ShowRemovedMovieHandler}
          id={query}
        />
      )}
      {isClicked && <Removed movie={removedMovie} id={query} />}
    </>
  );
}

// export async function getStaticPaths() {
//   const client = await MongoClient.connect(
//     "mongodb+srv://sleasarbajic:FIEzTsepUaCSR79i@creck.ougdyzb.mongodb.net/users?retryWrites=true&w=majority"
//   );
//   const db = client.db();

//   const userCollection = db.collection("users");

//   const users = await userCollection.find().toArray();
//   client.close();
//   return {
//     fallback: "blocking",
//     paths: users.map((user) => ({
//       params: { mylist: user._id.toString() },
//     }))
//   };
// }

export async function getServerSideProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://sleasarbajic:FIEzTsepUaCSR79i@creck.ougdyzb.mongodb.net/users?retryWrites=true&w=majority"
  );
  const db = client.db();

  const moviesCollection = db.collection("movies");
  const userCollection = db.collection("users");

  const user = await userCollection.find().toArray();
  const movies = await moviesCollection.find().toArray();

  return {
    props: {
      users: user.map((item) => ({
        _id: item._id.toString(),
        name: item.name,
        likedMovies: item.likedMovies,
      })),

      movies: movies.map((movie) => ({
        name: movie.name,
        genre: movie.genre,
        image: movie.image,
        preview: movie.preview,
        time: movie.time,
        realese: movie.realese,
        stars: movie.stars,
        id: movie._id.toString(),
        video: movie.video,
      })),
    },
  };
}
