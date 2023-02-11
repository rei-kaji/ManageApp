import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

type Props = {};
let token = localStorage.getItem("token");

const Header = ({ fullName, role }) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `${token}`;
  } else {
    alert("You have to login first!");
  }
  const handleLogOut = (e) => {
    e.preventDefault();
    axios
      .post("https://manageapp.onrender.com/api/auth/logout")
      .then((data) => {
        // console.log("token", token);
        // alert(`token: ${token}`);
        // we need to save the token to localstorage
        localStorage.removeItem("token");
        // we will redirect to the home page
        window.location.href = "/";
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <header>
        <nav
          className="navbar navbar-expand-lg bg-body-tertiary bg-dark"
          data-bs-theme="dark"
        >
          <div className="container-fluid">
            <Link
              to={"/home"}
              state={{ state: "Hello" }}
              className="navbar-brand"
            >
              CastAgency
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to={"/home"} className="nav-link active">
                    Home
                  </Link>
                </li>
                {role == "AGENCY" && (
                  <li className="nav-item">
                    <Link to={"/agency"} className="nav-link">
                      Agency
                    </Link>
                  </li>
                )}

                <li className="nav-item">
                  <Link to={"/profile"} className="nav-link">
                    Profile
                  </Link>
                </li>
                {/* <li className="nav-item" id="agency-link">
                  <Link to={"/register"} className="nav-link">
                    Register
                  </Link>
                </li> */}
                {/* <li className="nav-item" id="agency-link">
                  <Link to={"/login"} className="nav-link">
                    Login
                  </Link>
                </li> */}
              </ul>
              <div className="user-info nav-item">
                <span id="username">{fullName}</span>
                <button
                  id="logout"
                  className="btn btn-outline-light mx-2"
                  onClick={(e) => {
                    handleLogOut(e);
                  }}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
