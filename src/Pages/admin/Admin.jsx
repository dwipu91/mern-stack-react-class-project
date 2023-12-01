import { Link, Outlet, useLocation } from "react-router-dom";
import PageHeader from "../../Component/PageHeader/PageHeader";
import "./Admin.scss";
import { cheaKRouter } from "../../Helper/Helper";

const Admin = () => {
  const location = useLocation();
  return (
    <>
      <PageHeader title={"Admin"} />
      <section className="admin_">
        <h3>Admin Pannel</h3>
        <div className="panel">
          <div className="left">
            <ul>
              <li>
                <Link
                  className={
                    cheaKRouter(location.pathname, "user") ? "active" : ""
                  }
                  to="user"
                >
                  User
                </Link>
              </li>
              <li>
                <Link
                  className={
                    cheaKRouter(location.pathname, "catagory") ? "active" : ""
                  }
                  to="catagory"
                >
                  Catagory
                </Link>
              </li>
              <li>
                <Link
                  className={
                    cheaKRouter(location.pathname, "rolling") ? "active" : ""
                  }
                  to="rolling"
                >
                  Roller
                </Link>
              </li>
              <li>
                <Link
                  className={
                    cheaKRouter(location.pathname, "other") ? "active" : ""
                  }
                  to="other"
                >
                  Ohter
                </Link>
              </li>
            </ul>
          </div>
          <div className="right">
            <Outlet />
          </div>
        </div>
      </section>
    </>
  );
};

export default Admin;
