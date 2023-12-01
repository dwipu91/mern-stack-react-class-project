import "./admin_pages.scss";
const Catagory = () => {
  return (
    <>
      <div className="admin_pannel">
        <div className="left">
          <img
            src="https://as1.ftcdn.net/v2/jpg/05/24/30/02/1000_F_524300228_egMskw0zvvdwNUFPeJLlplclKzFamXBk.jpg"
            alt=""
          />
        </div>
        <div className="right">
          <h1>
            Name : <strong>Image</strong>
          </h1>
          <p>
            Locatin : <strong>address</strong>
          </p>
          <p>
            {" "}
            Note:{" "}
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perferendis rerum consequatur sed similique possimus labore
              cupiditate, tempora nostrum odit incidunt?
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Catagory;
