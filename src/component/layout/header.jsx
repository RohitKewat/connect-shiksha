import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const accessToken = localStorage.getItem("userToken");

  const [loading, setloading] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFiexd, setHeaderFiexd] = useState(false);

  const handlelogout = () => {
    localStorage.removeItem("userToken");
    setloading(true);
  };

  return (
    <header className="header-section bg-light">
      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            <div className="logo">
              <Link to="/">
                <img
                  src="assets/images/logo/01.png"
                  alt="logo"
                  style={{ width: "120px" }}
                />
              </Link>
            </div>
            <div className="menu-area">
              <div className="menu">
                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                  <li className="">
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/course">Course</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about">About</NavLink>
                  </li>
                  <li>
                    <NavLink to="/team">Team</NavLink>
                  </li>

                  <li>
                    <NavLink to="/contact">Contact</NavLink>
                  </li>
                  {accessToken ? (
                    <li>
                      <NavLink to="/dashboard-student">
                        Dashboard Student
                      </NavLink>
                    </li>
                  ) : (
                    ""
                  )}
                </ul>
              </div>

              <Link to="/login" className="login">
                <i className="icofont-user"></i>{" "}
                {accessToken ? (
                  <span onClick={handlelogout}>Log Out</span>
                ) : (
                  <span>Log in</span>
                )}
              </Link>
              <Link to="/signup" className="signup">
                <i className="icofont-users"></i> <span>SIGN UP</span>{" "}
              </Link>

              <div
                className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}
                onClick={() => setMenuToggle(!menuToggle)}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div
                className="ellepsis-bar d-lg-none"
                onClick={() => setSocialToggle(!socialToggle)}
              >
                <i className="icofont-info-square"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
