import { useState } from "react";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import Alert from "../Alert/Alert";

const Counter = () => {
  const [number, setNumber] = useState(0);

  const hendletIncrement = () => {
    setNumber((prevState) => prevState + 1);
  };
  return (
    <>
      <Card>
        <h1 style={{ fontSize: "200px" }}> {number} </h1>
        <br />
        <button onClick={hendletIncrement} className="btn btn-success">
          +
        </button>{" "}
        &nbsp;
        <button onClick={() => setNumber(number - 1)} className="btn btn-info">
          {" "}
          -
        </button>{" "}
        &nbsp;
        <button onClick={() => setNumber(0)} className="btn btn-light">
          {" "}
          Reset{" "}
        </button>
      </Card>
      <Footer number={number} incr={hendletIncrement} />

      <Card>
        <Alert type={"success"} children={"All right thate"} number={number} />
      </Card>
    </>
  );
};

export default Counter;
