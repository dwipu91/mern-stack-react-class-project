import PageHeader from "../../Component/PageHeader/PageHeader";
import "./about.scss";
const About = () => {
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
      </section>
    </>
  );
};

export default About;
