// import axios from "../libs/axios";
import axios from "axios";
import axiosOrigin from "axios";
import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, redirect } from "react-router-dom";

type Props = {};

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
      .post("http://localhost:3001/api/auth/login", data)
      .then((data) => {
        const { token } = data.data;
        // console.log("token", token);
        // alert(`token: ${token}`);
        // we need to save the token to localstorage
        localStorage.setItem("token", token);
        // we will redirect to the home page
        window.location.href = "/";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Container style={{ paddingTop: "5rem" }}>
        <h1>Login</h1>

        <Form
          onSubmit={() => {
            redirect("/");
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
      </Container>
    </>
  );
};

export default Login;
