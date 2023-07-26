import style from "./Modal.module.css";

function Modal({ children }) {
  return <div className={style.Modal}>{children}</div>;
}

export default Modal;
