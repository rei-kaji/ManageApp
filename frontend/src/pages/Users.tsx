import React, { useEffect, useState } from "react";

const host = "https://manageapp.onrender.com";
type Props = {};

const Users = () => {
  const [loading, setLoading] = useState(false);
  // const [allPosts, setAllUsers] = useState(null);

  // const fetchAllUsers = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await fetch(`${host}/api/users/login`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         email: "rei@gmail.com",
  //         password: "123456",
  //       }),
  //     });
  //     console.log("response", response);
  //     if (response.ok) {
  //       const result = await response.json();
  //       console.log("result", result);
  //       setAllUsers(result.data.reverse());
  //     }
  //   } catch (error) {
  //     alert(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchAllUsers();
  // }, []);

  return (
    <>
      <header>
        <nav
          className="navbar navbar-expand-lg bg-body-tertiary bg-dark"
          data-bs-theme="dark"
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="./index.html">
              CastAgency
            </a>
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
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="./index.html"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./profile.html">
                    Profile
                  </a>
                </li>
                <li className="nav-item" id="agency-link">
                  <a className="nav-link" href="./agency.html">
                    Agency
                  </a>
                </li>
              </ul>
              <div className="user-info nav-item">
                <span id="username"></span>
                <button id="logout" className="btn btn-outline-light mx-2">
                  Logout
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <div className="container mt-5">
          <h1 id="actor-title" className="mb-5">
            List of Actors
          </h1>
          <div id="list-actor"></div>
        </div>
      </main>
    </>
  );
};

export default Users;
