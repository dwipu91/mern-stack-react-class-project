import "./admin_pages.scss";
const Other = () => {
  return (
    <>
      <div className="admin_pannel">
        <div className="left">
          <img
            src="https://as2.ftcdn.net/v2/jpg/06/44/03/23/1000_F_644032318_Wm0MjPevdRqGT7U3tOBF9EakJttIpAVE.jpg"
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

export default Other;
