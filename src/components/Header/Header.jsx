import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import bars from "../../assets/bars.png";
import { Link } from "react-scroll";
const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menu, setMenu] = useState(false);
  return (
    <div className="header">
      <img src={Logo} alt="logo" className="logo" />

      {menu === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => setMenu(true)}
        >
          <img
            src={bars}
            alt="bars"
            style={{ width: "1.5rem", height: "1.5rem" }}
          />{" "}
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            {" "}
            <Link
              to="home"
              activeClass="active"
              span={true}
              smooth={true}
              onClick={() => setMenu(false)}
            >
              Home
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to="programs"
              span={true}
              smooth={true}
              onClick={() => setMenu(false)}
            >
              Programs
            </Link>
          </li>
          <li >
            {" "}
            <Link
              to="reasons"
              span={true}
              smooth={true}
              onClick={() => setMenu(false)}
            >
              Why Us
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to="plans"
              span={true}
              smooth={true}
              onClick={() => setMenu(false)}
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              to="testimonials"
              span={true}
              smooth={true}
              onClick={() => setMenu(false)}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
