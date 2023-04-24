import MoviePreview from "@/components/UI/MoviePreview";
import Head from "next/head";

import { MongoClient } from "mongodb";

import TopMoviesList from "@/components/UI/TopMoviesList";
import MovieItemList from "@/components/UI/MovieItemList";
import { useRouter } from "next/router";
import MovieDetails from "@/components/UI/MovieDetails";
import { useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";

function UserLoggedIn(props) {
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 2000);
  }, []);
  const router = useRouter();
  let id;
  if (typeof window !== "undefined") {
    // 👉️ can use localStorage here
    id = localStorage.getItem("token");
  } else {
    // 👉️ can't use localStorage
  }

  const filteredUser = props.users.filter((item) => item._id === id);
  useEffect(() => {
    if (filteredUser.length === 0) {
      router.push("/login");
    }
  }, [filteredUser]);
  let movie = [];
  let filteredMovies = [];
  if (!router.query.detail) {
  } else {
    movie = props.movies.filter((movie) => movie.id === router.query.detail);
    filteredMovies = props.movies.filter(
      (chosen) => movie[0].genre === chosen.genre && movie[0].id !== chosen.id
    );
  }
  return (
    <>
      <Head>
        <title>Creckflix</title>
        <meta name="browse" content="browse movies"></meta>
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

      {!isLoading && <MoviePreview movie={props.movies[props.randomNumber]} />}
      {!isLoading && (
        <TopMoviesList
          movies={props.movies}
          user={filteredUser}
          id={id}
          class="mt"
        />
      )}

      {!isLoading && (
        <MovieItemList
          movies={props.movies}
          title="Trending now"
          user={filteredUser}
          id={id}
        />
      )}
      {!isLoading && (
        <MovieItemList
          movies={props.movies}
          user={filteredUser}
          title="New Realses"
          id={id}
        />
      )}
      {!isLoading && (
        <TopMoviesList movies={props.movies} user={filteredUser} id={id} />
      )}
      {!isLoading && (
        <MovieItemList
          movies={props.movies}
          user={filteredUser}
          title="New Realses"
          id={id}
        />
      )}
      {!isLoading && (
        <MovieItemList
          movies={props.movies}
          user={filteredUser}
          title="New Realses"
          id={id}
        />
      )}
      {router.query.detail && (
        <MovieDetails
          movie={movie[0]}
          filter={filteredMovies}
          query={router.query.detail}
          user={filteredUser}
          id={id}
        />
      )}
    </>
  );
}

export default UserLoggedIn;

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://sleasarbajic:FIEzTsepUaCSR79i@creck.ougdyzb.mongodb.net/users?retryWrites=true&w=majority"
  );
  const db = client.db();

  const moviesCollection = db.collection("movies");
  const userCollection = db.collection("users");

  const user = await userCollection.find().toArray();
  const movies = await moviesCollection.find().toArray();
  const number = Math.round(Math.random() * 9);
  return {
    props: {
      users: user.map((item) => ({
        _id: item._id.toString(),
        name: item.name,
        likedMovies: item.likedMovies,
      })),
      randomNumber: number,
      movies: movies.map((movie) => ({
        name: movie.name,
        genre: movie.genre,
        image: movie.image,
        preview: movie.preview,
        time: movie.time,
        realese: movie.realese,
        stars: movie.stars,
        id: movie._id.toString(),
      })),
    },
  };
}
