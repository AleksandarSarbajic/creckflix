import classes from "../UI/FilteredMovies.module.css";
import { CiCirclePlus, CiCircleCheck } from "react-icons/ci";
import { useState, useEffect } from "react";
export default function FilteredMovies(props) {
  const [isChecked, setIsChecked] = useState(false);
  const [liked, setIsLiked] = useState(
    props.user[0].likedMovies.filter((item) => item === props.id)
  );
  if (liked.length !== 0) {
    useEffect(() => {
      setIsChecked(true);
    }, []);
  }
  function likeMovieHandler() {
    if (isChecked === false) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
    props.insertMovie(props.id);
  }

  return (
    <div className={classes.item}>
      <img src={props.img} className={classes.img} />
      <div className={classes.about}>
        <span className={classes.border}>16+</span>
        <span className={classes.time}>{props.realese}</span>
        <button className={classes.button} onClick={likeMovieHandler}>
          {isChecked ? (
            <CiCircleCheck className={classes.add} />
          ) : (
            <CiCirclePlus className={classes.add} />
          )}
        </button>
      </div>
      <p className={classes.description}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </p>
    </div>
  );
}
