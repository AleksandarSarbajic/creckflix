import classes from "../help/form.module.css";
import { CiSearch } from "react-icons/ci";
export default function FormHelp() {
  return (
    <>
      <h1 className={classes.header}>Help Center</h1>
      <form className={classes.form}>
        <CiSearch className={classes.icon} />
        <input
          placeholder="What do you need help with?"
          className={classes.input}
        />
      </form>
    </>
  );
}
