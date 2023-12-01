import "./admin_pages.scss";
const Rolling = () => {
  return (
    <>
      <div className="admin_pannel">
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
        <div className="left">
          <img
            src="https://as1.ftcdn.net/v2/jpg/06/51/98/36/1000_F_651983600_tDLq6tqcFAEGllJ8buiFyxXnH7uEV3t2.webp"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Rolling;
