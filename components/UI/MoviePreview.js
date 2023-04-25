import Link from "next/link";
import classes from "../UI/MoviePreview.module.css";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
function MoviePreview({ movie }) {
  const [description, setDescription] = useState(
    "At top-secret U.S.-Australian joint defense facility Pine Gap, fissuresappear in the critical alliance as spies work with, and against, eachother."
  );
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setDescription("");
      setIsVisible(false);
    }, 5000);
  }, []);
  return (
    <div
      className={classes.bg}
      style={{
        backgroundImage: `linear-gradient(45deg,
          rgba(0,0,0, 0.5),
          rgba(0,0,0, 0.5)), url(${movie.preview})`,
      }}
    >
      <h1 className={`${isVisible ? "" : "visible"} ${classes.header}`}>
        {movie.name}
      </h1>
      <p className={classes.text}>{description}</p>
      <div className={classes.buttons}>
        <Link href={"/"} className={classes.play}>
          <FaPlay className={classes.icon} />
          Play
        </Link>
        <Link href={`/browse/?detail=${movie.id}`} className={classes.info}>
          <AiOutlineInfoCircle className={classes["icon-info"]} />
          More Info
        </Link>
      </div>
    </div>
  );
}

export default MoviePreview;
