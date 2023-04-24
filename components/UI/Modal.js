import classes from "./Modal.module.css";
import { useRouter } from "next/router";
function Modal(props) {
  const router = useRouter();
  function onCloseHandler() {
    router.push("/browse");
  }
  return (
    <>
      <div className={classes.backdrop} onClick={onCloseHandler} />
      <dialog open className={classes.modal}>
        {props.children}
      </dialog>
    </>
  );
}
export default Modal;
