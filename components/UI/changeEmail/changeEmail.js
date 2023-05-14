import classes from "../password/password.module.css";
import { useRef, useState } from "react";
import { useRouter } from "next/router";
export default function ChangePassword(props) {
  const route = useRouter();
  const [newIsTrue, setNewIsTrue] = useState(false);
  const [newClass, setNewClass] = useState("");
  const [enteredClass, seteEteredClass] = useState("");
  const [currentClass, setCurrentClass] = useState("");
  const [enteredIsTrue, SetEnteredNewIsTrue] = useState(false);
  const currentRef = useRef(null);
  const newRef = useRef(null);
  const enterRef = useRef(null);

  function onChangeCurrentPassowordHandler() {
    console.log(currentRef.current.value);
    if (currentRef.current.value.length > 0) {
      setCurrentClass(classes.hastext);
    } else {
      setCurrentClass("");
    }
  }
  function onChangeNewPassowordHandler() {
    console.log(newRef.current.value);
    if (newRef.current.value.length < 8) {
      setNewIsTrue(true);
    } else {
      setNewIsTrue(false);
    }
    if (newRef.current.value.length > 0) {
      setNewClass(classes.hastext);
    } else {
      setNewClass("");
    }
  }
  function onChangeEnterPassowordHandler() {
    console.log(enterRef.current.value);
    if (enterRef.current.value !== newRef.current.value) {
      SetEnteredNewIsTrue(true);
    } else {
      SetEnteredNewIsTrue(false);
    }
    if (enterRef.current.value.length > 0) {
      seteEteredClass(classes.hastext);
    } else {
      seteEteredClass("");
    }
  }
  function onSubmitHandler(e) {
    const user = {
      currentEmail: currentRef.current.value,
      newEmail: newRef.current.value,
      enteredEmail: enterRef.current.value,
    };
    // console.log(user);
    e.preventDefault();
    props.onClick(user);
  }
  function redirectHandler(e) {
    e.preventDefault();
    route.push("/yourAccount");
  }
  return (
    <div className={classes.bg}>
      <h1 className={classes.heading}>Change Email</h1>
      <p className={classes.subheading}>
        Protect your account with a unique password at least 8 characters long
      </p>
      <form className={classes.form} onSubmit={onSubmitHandler}>
        <div className={classes.inputPlacement}>
          <label>
            <input
              type="email"
              id="current"
              ref={currentRef}
              onChange={onChangeCurrentPassowordHandler}
            />
            <label
              htmlFor="current"
              className={`${classes.current} ${currentClass}`}
            >
              Current email
            </label>
            {props.errorNotSame && (
              <p className={classes.error}>
                Typed Email didnt match the current one, please try again!
              </p>
            )}
          </label>
        </div>
        <div className={classes.inputPlacement}>
          <label>
            <input
              type="email"
              id="new"
              onChange={onChangeNewPassowordHandler}
              ref={newRef}
              className={`${newIsTrue ? classes.outline : classes.valid}`}
            />
            <label htmlFor="new" className={`${classes.current} ${newClass}`}>
              New Email
            </label>
            {newIsTrue && (
              <label className={classes.invalid}>Email should contain @</label>
            )}
          </label>
        </div>
        <div className={classes.inputPlacement}>
          <label>
            <input
              type="email"
              id="entered"
              ref={enterRef}
              onChange={onChangeEnterPassowordHandler}
              className={`${enteredIsTrue ? classes.outline : classes.valid}`}
            />
            <label
              htmlFor="entered"
              className={`${classes.current} ${enteredClass}`}
            >
              Re-enter email
            </label>
            {enteredIsTrue && (
              <label className={classes.invalid}>
                Must match your new email.
              </label>
            )}
            {props.errorMsg && (
              <p className={classes.error}>
                Typed email didnt match the new one, please try again!
              </p>
            )}
          </label>
        </div>
        <div className={classes.buttons}>
          <button className={classes.button}>Save</button>
          <button className={classes.link} onClick={redirectHandler}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
