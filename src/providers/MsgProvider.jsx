import { useState } from "react";
import MsgContext from "../contex/MsgContext";

// eslint-disable-next-line react/prop-types
const MsgProvider = ({ children }) => {
  const [msg, setMsg] = useState("");

  const [counter, setCounter] = useState(0);
  const food = ["alu", "potol", "low", "apple"];

  return (
    <MsgContext.Provider value={{ food, msg, setMsg, counter, setCounter }}>
      {" "}
      {children}{" "}
    </MsgContext.Provider>
  );
};

export default MsgProvider;
