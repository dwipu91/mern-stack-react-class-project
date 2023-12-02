import { useState } from "react";

import PageHeader from "../../Component/PageHeader/PageHeader";
import "./Contract.scss";
import Swal from "sweetalert2";

//
const Contract = () => {
  //
  const [input, setInput] = useState({
    name: "",
    email: "",
    cell: "",
    password: "",
    food: "",
    gender: "",
  });

  // hendeler
  const hendleInputValue = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // submit frome
  const hendleFormSubmit = (e) => {
    e.preventDefault();

    // validation
    if (
      !input.name ||
      !input.email ||
      !input.gender ||
      !input.password ||
      !input.food ||
      !input.cell
    ) {
      Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`,
      });
    } else {
      Swal.fire({
        title: "Data add to server ",
        icon: "success",
      });
    }
  };

  return (
    <>
      <PageHeader title={"Contract"} />
      <section className="c_form">
        <div className="header">
          <h1>Contract</h1>
          <hr />
        </div>
        <form action="">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={input.name}
            onChange={hendleInputValue}
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={input.email}
            onChange={hendleInputValue}
          />
          <input
            type="text"
            placeholder="Cell"
            name="cell"
            value={input.cell}
            onChange={hendleInputValue}
          />
          <select name="food" value={input.food} onChange={hendleInputValue}>
            <option value="Apple">--select--</option>
            <option value="Apple">Apple</option>
            <option value="Mango">Mango</option>
            <option value="Orange">Orange</option>
            <option value="Bennana">Bennana</option>
          </select>
          <div>
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                onChangeCapture={hendleInputValue}
              />{" "}
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Femail"
                onChange={hendleInputValue}
              />{" "}
              Female
            </label>
          </div>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={input.password}
            onChange={hendleInputValue}
          />
          <button onClick={hendleFormSubmit}>Create Now</button>
        </form>
      </section>
    </>
  );
};

export default Contract;
