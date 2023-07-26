import { useState } from "react";
import Modal from "../../../common/Modal/Modal";
import style from "./ListModal.module.css";

function ListModal({ children, Lists }) {
  const [modal, setModal] = useState("");
  function mouseEnter() {
    setModal(
      <div className={style.inside}>
        <Modal>
          {Lists.map((List) => (
            <div className={style.inEl}>{List}</div>
          ))}
        </Modal>
      </div>
    );
  }
  function mouseLeave() {
    setModal("");
  }
  return (
    <div
      onMouseOver={mouseEnter}
      onMouseLeave={mouseLeave}
      className={style.wrapper}
    >
      <p>{children}</p>
      {modal}
    </div>
  );
}

export default ListModal;
