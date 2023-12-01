import PageHeader from "../../Component/PageHeader/PageHeader";
import "./home.scss";
const Home = () => {
  return (
    <>
      <PageHeader title={"Home"} />
      <section className="benner">
        <img
          src="https://media.istockphoto.com/id/546763388/photo/the-perfect-vantage-point.jpg?s=170667a&w=0&k=20&c=KcEe8bcUUAheYpdzIJ52Tk2N4ZY3OAtFRBjFCqI7Aq8="
          alt=""
        />
        <div className="benner_text">
          <h1>Lorem ipsum dolor sit amet</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
            magni sequi amet veniam, repellat laborum nulla officia dignissimos,
            necessitatibus distinctio rem accusantium commodi excepturi mollitia
            reiciendis quod in illo impedit blanditiis, exercitationem molestiae
            quisquam totam! Illo minima explicabo commodi, cum hic tempore non.
            Saepe nihil nostrum voluptate assumenda alias culpa!
          </p>
          <div className="benner_btn">
            <button>Get Start</button>
            <button>Read More</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
