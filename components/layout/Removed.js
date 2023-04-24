import { AiOutlineUndo } from "react-icons/ai";
import classes from "../layout/Removed.module.css";
import { Inter } from "next/font/google";
import { useCallback } from "react";
const inter = Inter({
  weight: ["500", "400", "600", "700"],
  subsets: ["latin"],
});
export default function Removed(props) {
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
  function returnDeletedMovieHandler() {
    insertMovie(props.movie[0].id);
  }
  return (
    <div className={classes.box}>
      <p className={classes.text}>
        {props.movie[0].name} has been deleted from your list
      </p>
      <button
        className={`${classes.button} ${inter.className}`}
        onClick={returnDeletedMovieHandler}
      >
        <AiOutlineUndo className={classes.icon} />
        <p className={classes.undo}>Undo</p>
      </button>
    </div>
  );
}
