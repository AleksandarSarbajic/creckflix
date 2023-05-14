import { useRouter } from "next/router";
import classes from "../Menager/Menage.module.css";
import { useState } from "react";
import { GoPencil } from "react-icons/go";
import Icons from "./Icons";
export default function MenageAccount(props) {
  const route = useRouter();
  const [name, setName] = useState(props.user.name);
  const [showIcons, setShowIcons] = useState(false);
  function onChangeHandler(e) {
    setName(e.target.value);
    console.log(name);
  }
  function moveHandler() {
    route.push("/browse");
  }
  function showIconsHanlder() {
    setShowIcons(true);
  }
  return (
    <>
      {showIcons && (
        <Icons name={props.user.name} image={props.user.image}></Icons>
      )}
      {!showIcons && (
        <div className={classes.container}>
          <h1 className={classes.heading}>Edit Profile</h1>
          <div className={classes.outline} />
          <div className={classes.sides}>
            <div className={classes.leftside}>
              <img
                src={props.user.image}
                className={classes.img}
                alt="Profile Picture"
              />
              <button className={classes.change} onClick={showIconsHanlder}>
                <GoPencil className={classes.icon} />
              </button>
            </div>
            <div className={classes.rightside}>
              <form className={classes.form}>
                <label htmlFor="id" className={classes.label}>
                  Account Name
                </label>
                <input
                  className={classes.name}
                  type="text"
                  id="name"
                  onChange={onChangeHandler}
                  value={name}
                />
              </form>
            </div>
          </div>
          <div className={classes.outline} />
          <div className={classes.buttons}>
            <button className={classes.save}>Save</button>
            <button className={classes.button} onClick={moveHandler}>
              Cancel
            </button>
            <button className={classes.button}>Delete Profile</button>
          </div>
        </div>
      )}
    </>
  );
}
