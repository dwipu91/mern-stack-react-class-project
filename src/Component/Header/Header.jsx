import { Link, useLocation } from "react-router-dom";
import "./Header.scss";
import { cheaKRouter } from "../../Helper/Helper";

const Header = () => {
  const location = useLocation();
  return (
    <>
      <header className="container shadow ">
        <div className="row">
          <div className="col-md-3">
            <div className="logo">
              <Link to="/">
                {" "}
                <img
                  src="https://mbluxury1.s3.amazonaws.com/2022/02/25172616/chanel-1.jpg"
                  alt=""
                />
              </Link>
            </div>
          </div>
          <div className="col-md-8">
            <nav>
              <ul>
                <li>
                  <Link
                    className={location.pathname === "/" ? "active" : ""}
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className={location.pathname === "/about" ? "active" : ""}
                    to="/about"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className={location.pathname === "/team" ? "active" : ""}
                    to="/team"
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    className={
                      location.pathname === "/contract" ? "active" : ""
                    }
                    to="/contract"
                  >
                    Contract
                  </Link>
                </li>
                <li>
                  <Link
                    className={location.pathname === "/blog" ? "active" : ""}
                    to="/blog"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-md-1">
            <nav>
              <ul>
                <li>
                  <Link
                    className={
                      cheaKRouter(location.pathname, "admin") ? "active" : ""
                    }
                    to="/admin"
                  >
                    Admin
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
