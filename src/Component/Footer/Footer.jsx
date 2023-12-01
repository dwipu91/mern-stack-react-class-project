import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter, FaLinkedin } from "react-icons/fa6";

import "./Footer.scss";
const Footer = () => {
  return (
    <>
      <footer className="container bg-dark text-light p-3 ">
        <div className="row">
          <div className="col-md-6 ">
            <Link to="/">
              {" "}
              <img
                src="https://mbluxury1.s3.amazonaws.com/2022/02/25172616/chanel-1.jpg"
                alt=""
              />
            </Link>
          </div>
          <div className="col-md-2 ">
            <h5>Customer</h5>
            <p>
              Name : <strong>Akteruzzaman</strong>
            </p>
            <p>
              Name : <strong>Abdul korim</strong>{" "}
            </p>
          </div>
          <div className="col-md-2 ">
            <h5>Company</h5>
            <p>one</p>
            <p>one</p>
          </div>
          <div className="col-md-2 ">
            <h5>Fllow us</h5>
            <div className="solcile_icone">
              <Link to="facebook.com">
                <FaFacebook />
              </Link>
              <Link to="twitter.com">
                <FaTwitter />
              </Link>
              <Link to="twitter.com">
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
