import Image from "next/image";
import mobile from "../../public/img/mobile.png";
import monitor from "../../public/img/monitor.png";
import Outline from "../layout/Outline";
import classes from "../UI/ShowGuide.module.css";
function ShowGuide(props) {
  return (
    <>
      <div className={`${classes.container} ${classes["grid-1"]}`}>
        <Image
          src={mobile}
          className={classes.img}
          alt="our application on phone"
        />
        <div className={classes.textbox}>
          <h2 className={classes.header}>Watch your favorite movies offline</h2>
          <p className={classes.text}>
            Save your favorites easily and always have somthing to watch
          </p>
        </div>
      </div>
      <Outline />
      <div className={`${classes.container} ${classes["grid-2"]}`}>
        <div className={classes.textbox}>
          <h2 className={classes.header}>Watch everywhere.</h2>
          <p className={classes.text}>
            Stream unlimited movies and TV shows on your phone, tablet andlaptop
            without paying.
          </p>
        </div>
        <Image
          src={monitor}
          className={classes.monitor}
          alt="our application on phone"
        />
      </div>
      <Outline />
    </>
  );
}
export default ShowGuide;
