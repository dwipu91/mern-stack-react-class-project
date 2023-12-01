import { useContext, useEffect } from "react";
import PageHeader from "../../Component/PageHeader/PageHeader";
import MsgContext from "../../contex/MsgContext";
import "./Team.scss";

const Team = () => {
  const { msg, setMsg } = useContext(MsgContext);
  const { counter, setCounter } = useContext(MsgContext);

  //
  useEffect(() => {
    console.log("one more time");
  }, []);

  return (
    <>
      <PageHeader title={"Team"} />
      <section className="team">
        <h1>Team page</h1>
        <input
          type="text"
          placeholder="MSG"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />
        <h2>{msg}</h2>
        <hr />
        <h1>{counter}</h1>
        <button onClick={() => setCounter((prevState) => prevState - 1)}>
          {" "}
          --{" "}
        </button>
        <button onClick={() => setCounter((prevState) => prevState + 1)}>
          {" "}
          ++{" "}
        </button>
        <br />
      </section>
    </>
  );
};

export default Team;
