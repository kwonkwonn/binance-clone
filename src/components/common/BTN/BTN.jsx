import style from "./BTN.module.css";

function BTN({ children, whenClicked, isable }) {
  if (isable) {
    return (
      <button onClick={() => whenClicked()} className={style.BTN}>
        {children}
      </button>
    );
  } else {
    return (
      <button className={`${style.BTN} ${style.BTNUnAble}`}>{children}</button>
    );
  }
}

export default BTN;
