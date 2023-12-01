import { useState } from "react";
import PageHeader from "../../Component/PageHeader/PageHeader";
import { useEffect } from "react";

const Team = () => {
  const [age, setAge] = useState(0);
  useEffect(() => {
    console.log("one more time");
  }, []);
  return (
    <>
      <PageHeader title={"Team"} />
      <section>
        <h1>Team page</h1>

        <input
          type="text"
          placeholder="Name"
          onClick={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          onClick={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onClick={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <hr />
        <br />
      </section>
    </>
  );
};

export default Team;
