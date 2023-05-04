import classes from "../Search/SearchedMovies.module.css";
import SearchItem from "./SearchItem";
import { useCallback } from "react";

export default function SearchedMovies(props) {
  const insertMovie = useCallback(
    async (movie) => {
      const user = { _id: props.id, movie: movie };

      const response = await fetch("/api/browse", {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
    },
    [props, props.id]
  );

  return (
    <div className={classes.grid}>
      {props.movies.map((item) => (
        <SearchItem
          key={item._id}
          id={item._id}
          image={item.preview}
          name={item.name}
          insertMovie={insertMovie}
          user={props.user}
          video={item.video}
        />
      ))}
    </div>
  );
}
