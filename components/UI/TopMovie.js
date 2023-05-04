import Link from "next/link";
import classes from "../UI/TopMovie.module.css";

import { BsFillPlayCircleFill } from "react-icons/bs";
import { SlPlus, SlCheck } from "react-icons/sl";
import { IoChevronDownCircleOutline } from "react-icons/io5";
import { useEffect, useState } from "react";

function TopMovie(props) {
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
    <div className={classes.top}>
      <div className={classes.slider}>
        <h1 className={classes.place}>{props.position}</h1>
        <Link href={`/browse/?detail=${props.id}`}>
          <img src={props.image} className={classes.img} />
        </Link>
      </div>
      <div className={classes.hidden}>
        <img
          src={props.preview}
          alt="movie poster"
          className={classes.poster}
        />
        <div className={classes.buttons}>
          <div>
            <Link href={`/watch?q=${props.video}`} className={classes.play}>
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
        <div className={classes.description}>
          <span className={classes.new}>New</span>
          <span className={classes.year}>16+</span>
          <span className={classes.time}>2h 19m</span>
          <p className={classes.genre}>{props.genre}</p>
        </div>
      </div>
    </div>
  );
}
export default TopMovie;
