// <!-- TODO: Add register page with functions whenever people registered, send them to login page -->
import axios from "axios";
import React from "react";

type Props = {};

const Register = (props: Props) => {
  let data = {
    fullName: "Rei Kaji",
    email: "rei@gmail.com",
    password: "123456",
    role: "DIRECTOR",
  };

  // const options = {
  //   url: "/api/auth/register",
  //   method: "POST",
  //   body: data,
  // };
  // axios(options)
  console.log("Start");

  axios
    .post("http://localhost:3001/api/auth/register", data)
    .then((data) => {
      const { token } = data.data;
      console.log("token", token);
      alert(`token: ${token}`);
      // we need to save the token to localstorage
      localStorage.setItem("token", token);
      // we will redirect to the home page
      window.location.href = "./";
    })
    .catch((err) => {
      console.log("Something happen on login: ", err);
    });
  return <div>Register</div>;
};

export default Register;
