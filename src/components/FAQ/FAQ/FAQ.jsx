import "./FAQ.css";
function FAQ({ name, contents }) {
  return (
    <>
      <div className="divContainer">
        {name}
        <div className="divContainerContainer"> {contents}</div>
      </div>
    </>
  );
}
export default FAQ;
