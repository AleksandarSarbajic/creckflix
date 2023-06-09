import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

import SearchItem from "./Search/SearchItem";

import classes from "../UI/LikedMovies.module.css";

export default function TopMoviesList(props) {
  const [movies, setMovies] = useState(props.movies);
  const [isLoading, setIsLoading] = useState(false);
  const filteredUser = props.user.filter((item) => item._id === props.id);
  const likedMovies = filteredUser[0].likedMovies;
  console.log(likedMovies);
  let filteredMovies = movies.filter((movie) => likedMovies.includes(movie.id));
  console.log(filteredMovies);
  useEffect(() => {
    setMovies(filteredMovies);
  }, []);
  const insertMovie = useCallback(
    async (movie) => {
      const user = { _id: props.id, movie: movie };
      const response = await fetch("/api/browse", {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();

      const removedItem = filteredMovies.filter((item) => item.id === movie);
      props.onClick(true, removedItem);

      const existingCartItemIndex = filteredMovies.findIndex(
        (item) => item.id === movie
      );
      console.log(existingCartItemIndex);
      setMovies((prev) => {
        filteredMovies.splice(existingCartItemIndex, 1);
        return filteredMovies;
      });
      setTimeout(() => {
        props.onClick(false);
      }, 2000);
    },
    [props, props.id, filteredMovies]
  );

  return (
    <div className={classes.box}>
      <h3 className={classes.header}>
        {movies.length > 0 ? "My List" : "Your list is empty"}
      </h3>
      {movies.length > 0 ? (
        ""
      ) : (
        <Link href="/browse" className={classes.link}>
          Go to home page
        </Link>
      )}
      <div className={classes.grid}>
        {movies.map((item) => (
          <SearchItem
            key={item.id}
            id={item.id}
            image={item.preview}
            name={item.name}
            insertMovie={insertMovie}
            user={filteredUser}
            video={item.video}
          />
        ))}
      </div>
    </div>
  );
}
