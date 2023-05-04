import Modal from "./Modal";
import classes from "../UI/MovieDetails.module.css";
import Link from "next/link";
import { BsFillPlayFill } from "react-icons/bs";
import { CiCirclePlus, CiCircleCheck } from "react-icons/ci";
import { IoIosCloseCircle } from "react-icons/io";
import FilteredMovies from "./FilteredMovies";
import { useCallback, useState, useEffect } from "react";

export default function MovieDetails({ movie, filter, user, id }) {
  console.log(movie);
  const [isChecked, setIsChecked] = useState(false);
  const [liked] = useState(
    user[0].likedMovies.filter((item) => item === movie.id)
  );
  if (liked.length !== 0) {
    useEffect(() => {
      setIsChecked(true);
    }, []);
  }

  const insertMovie = useCallback(
    async (movies) => {
      try {
        const user = { _id: id, movie: movies };

        const response = await fetch("/api/browse", {
          method: "POST",
          body: JSON.stringify(user),
          headers: { "Content-Type": "application/json" },
        });
        const data = await response.json();
      } catch (error) {
        console.error(error);
      }
    },
    [id]
  );

  function likeMovieHandler() {
    if (isChecked === false) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
    insertMovie(movie.id);
  }

  return (
    <Modal>
      <div>
        <img src={movie.preview} className={classes.image} />
        <Link href="/browse" className={classes.exit}>
          <IoIosCloseCircle className={classes.exiticon} />
        </Link>
      </div>
      <div className={classes.overlay}>
        <h2 className={classes.name}>{movie.name}</h2>
        <div className={classes.links}>
          <Link href={`/watch?q=${movie.video}`} className={classes.play}>
            <BsFillPlayFill className={classes.icon} />
            Play
          </Link>
          <button onClick={likeMovieHandler} className={classes.button}>
            {isChecked ? (
              <CiCircleCheck className={classes.add} />
            ) : (
              <CiCirclePlus className={classes.add} />
            )}
          </button>
        </div>
      </div>
      <div className={classes.text}>
        <div>
          <div className={classes.about}>
            <span className={classes.new}>New</span>
            <span>{movie.realese}</span>
            <span>{movie.time}</span>
            <span className={classes.bordertext}>HD</span>
          </div>
          <div>
            <span className={classes.bordertext}>16+</span>
            <span className={classes.genre}>Action</span>
          </div>
          <p className={classes.description}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
        <div className={classes.cast}>
          <span>
            <span className={classes.colored}>Cast:</span>
            {movie.stars.join(", ")}
          </span>
          <span>
            <span className={classes.colored}>Genre:</span> {movie.genre}
          </span>
          <span>
            <span className={classes.colored}>This movie is:</span> OffBeat
          </span>
        </div>
      </div>
      {filter.length !== 0 && (
        <p className={classes.members}>Members Also Choose</p>
      )}
      <div className={classes.grid}>
        {filter.map((movie) => (
          <FilteredMovies
            img={movie.preview}
            time={movie.time}
            key={movie.id}
            id={movie.id}
            realese={movie.realese}
            user={user}
            insertMovie={insertMovie}
            video={movie.video}
          />
        ))}
      </div>
      <p className={classes.trailers}>Trailers & More</p>
      <div className={classes.more}>
        <p className={classes.details}>
          <span className={classes.colored}>Director:</span>
          {movie.stars[0]}
        </p>
        <p className={classes.details}>
          <span className={classes.colored}>Cast:</span>
          {movie.stars.join(", ")}
        </p>
        <p className={classes.details}>
          <span className={classes.colored}>Writer:</span>
          {movie.stars[0]}
        </p>
        <p className={classes.details}>
          <span className={classes.colored}>Genre:</span>
          {movie.genre}
        </p>
        <p className={classes.details}>
          <span className={classes.colored}>This movie is:</span>
          {movie.genre}
        </p>
        <p className={classes.details}>
          <span className={classes.colored}>Maturity rating:</span>
          <span className={classes.bordertext}>16+</span>
        </p>
      </div>
    </Modal>
  );
}
