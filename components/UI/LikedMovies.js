import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import MovieItem from "./MovieItem";
import classes from "../UI/LikedMovies.module.css";

export default function TopMoviesList(props) {
  const [movies, setMovies] = useState(props.movies);
  const [isLoading, setIsLoading] = useState(false);
  const filteredUser = props.user.filter((item) => item._id === props.id);
  const likedMovies = props.user[0].likedMovies;
  let filteredMovies = movies.filter((movie) => likedMovies.includes(movie.id));
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

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
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
      <Carousel responsive={responsive} ssr={true} containerClass="zindex">
        {movies.map((movie) => (
          <MovieItem
            id={movie.id}
            key={movie.id}
            image={movie.preview}
            name={movie.name}
            insertMovie={insertMovie}
            user={filteredUser}
          />
        ))}
      </Carousel>
    </div>
  );
}
