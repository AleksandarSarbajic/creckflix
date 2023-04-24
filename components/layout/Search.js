import { AiOutlineSearch, AiOutlinePlus } from "react-icons/ai";
import classes from "../layout/Search.module.css";
import { useRef, useState } from "react";
import { useRouter } from "next/router";

export default function Search() {
  const [isVisible, setIsVisible] = useState(true);
  const [classInput, setClassInput] = useState(`${classes.input}`);
  const [removeIcon, setRemoveIcon] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const inputRef = useRef(null);

  function onClickHandler() {
    inputRef.current.focus();
    setClassInput(`${classes.input} ${classes.focus}`);
    setIsVisible(false);
  }
  function onBlurHandler() {
    if (inputRef.current.value.length > 0) {
      inputRef.current.focus();
    } else {
      setClassInput(`${classes.input}`);
      setIsVisible(true);
    }
  }
  function onChangeHandler(e) {
    setSearchTerm(e.target.value);
    if (e.target.value.length === 0) {
      setRemoveIcon("");
      if (router.pathname !== "/browse") {
        router.push({
          pathname: "/browse",
        });
      }
    } else {
      setRemoveIcon(<AiOutlinePlus className={classes.remove} />);
      router.push({
        pathname: "/search",
        query: { q: inputRef.current.value },
      });
    }
  }

  function clearInputHandler(e) {
    e.preventDefault();
    setSearchTerm("");
    setRemoveIcon("");
    if (router.pathname !== "/browse") {
      router.push({
        pathname: "/browse",
      });
    }
  }

  return (
    <>
      {isVisible && (
        <button className={classes.button} onClick={onClickHandler}>
          <AiOutlineSearch className={classes.search} />
        </button>
      )}
      <form className={classes.form}>
        <div className={classes.box}>
          {!isVisible && <AiOutlineSearch className={classes.icon} />}
          <input
            className={classInput}
            onBlur={onBlurHandler}
            ref={inputRef}
            placeholder="Title, Genre"
            onChange={onChangeHandler}
            value={searchTerm}
          ></input>
          <button className={classes.button} onClick={clearInputHandler}>
            {removeIcon}
          </button>
        </div>
      </form>
    </>
  );
}
