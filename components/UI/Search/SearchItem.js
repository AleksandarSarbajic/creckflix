import classes from "../Search/SearchItem.module.css";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { SlCheck, SlPlus } from "react-icons/sl";
import { IoChevronDownCircleOutline } from "react-icons/io5";
import { useEffect, useState } from "react";

import Link from "next/link";

export default function SearchItem(props) {
  const [isChecked, setIsChecked] = useState(false);
  const [liked] = useState(
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
    <div className={classes.cover}>
      <img src={props.image} alt="movie" className={classes.img} />
      <div className={classes.backface}>
        <p className={classes.name}>{props.name}</p>
        <p className={classes.description}>
          At top-secret U.S.-Australian joint defense facility Pine Gap.
        </p>
        <div className={classes.buttons}>
          <div>
            <Link href={`/`} className={classes.play}>
              <BsFillPlayCircleFill />
            </Link>
            <button className={classes.add} onClick={likeMovieHandler}>
              {isChecked ? (
                <>
                  <SlCheck className={classes.checked} />
                  <span className={classes.remove}>Remove from my list</span>
                </>
              ) : (
                <>
                  <SlPlus className={classes.checked} />
                  <span className={classes.float}>Add to my list</span>
                </>
              )}
            </button>
          </div>
          <Link href={`/browse/?detail=${props.id}`} className={classes.more}>
            <IoChevronDownCircleOutline className={classes.info} />
            <span className={classes.absolute}>More Info</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
