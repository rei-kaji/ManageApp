// import axios from "../libs/axios";
import axios from "axios";
import axiosOrigin from "axios";
import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, redirect } from "react-router-dom";

type Props = {};

// console.log("Open Login");

const Login = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    let data = {
      email: email,
      password: password,
    };
    // console.log("data", data);
    // alert(`date: ${data.email}`);

    axios
      .post("https://manageapp.onrender.com/api/auth/login", data)
      .then((data) => {
        const { token } = data.data;
        // console.log("token", token);
        // alert(`token: ${token}`);
        // we need to save the token to localstorage
        localStorage.setItem("token", token);
        // we will redirect to the home page
        window.location.href = "/home";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div
        style={{
          // marginTop: "2rem",
          border: "black 1rem solid",
          background: "black",
        }}
      >
        <span
          style={{
            background: "black",
            color: "white",
            // fontWeight: "700",
            fontSize: "1.25rem",
          }}
        >
          Cast Agency
        </span>
      </div>
      <Container
        style={{
          // paddingTop: "5rem",
          marginTop: "2rem",
          padding: "4rem",
          backgroundColor: "#F0EEED",
          borderRadius: "1rem",
        }}
      >
        <h1>Login</h1>

        <Form
          onSubmit={() => {
            redirect("/home");
          }}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            onClick={(e) => {
              handleLogin(e);
            }}
          >
            Submit
          </Button>
        </Form>
        <p>
          Don't you have account?{" "}
          <span>
            <Link to={"/register"}>Register</Link>
          </span>
        </p>
      </Container>
    </>
  );
};

export default Login;
