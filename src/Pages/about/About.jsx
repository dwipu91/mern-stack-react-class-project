import { useContext } from "react";
import PageHeader from "../../Component/PageHeader/PageHeader";
import "./about.scss";
import MsgContext from "../../contex/MsgContext";

const About = () => {
  const { food } = useContext(MsgContext);

  return (
    <>
      <PageHeader title={"About"} />
      <section className="about">
        <div className="about_text">
          <table className="table">
            <li>
              <label htmlFor="" className="form-lebel">
                Name
              </label>
              <input type="text" className="form-control" />
            </li>
          </table>
        </div>
        <div>
          {food.map((item, index) => {
            return (
              <h1 key={index}>
                {index + 1} {item}
              </h1>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default About;
