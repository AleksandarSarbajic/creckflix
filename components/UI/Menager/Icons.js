import classes from "../Menager/Icons.module.css";
import { FiArrowLeft } from "react-icons/fi";
export default function Icons(props) {
  return (
    <>
      <div className={classes.bar}>
        <nav className={classes.nav}>
          <div className={classes.flex}>
            <FiArrowLeft className={classes.arrow} />
            <div className={classes.text}>
              <p className={classes.heading}>EditProfile</p>
              <p className={classes.subheading}>Choose a profile icon.</p>
            </div>
          </div>
          <div className={classes.user}>
            <span className={classes.name}>{props.name}</span>
            <img src={props.image} className={classes.profile} />
          </div>
        </nav>
      </div>
      <div className={classes.container}>
        <h1 className={classes.header}>Icons</h1>
        <div className={classes.grid}></div>
      </div>
    </>
  );
}
