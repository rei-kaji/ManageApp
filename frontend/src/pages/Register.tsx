// <!-- TODO: Add register page with functions whenever people registered, send them to login page -->
import axios from "axios";
import React, { useState } from "react";
import {
  Badge,
  Button,
  ButtonGroup,
  Col,
  Container,
  Form,
  Row,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";
import { redirect } from "react-router-dom";
import Header from "../components/Header";

type Props = {};
const radios = [
  { name: "USER", value: "USER" },
  { name: "AGENCY", value: "AGENCY" },
  { name: "DIRECTOR", value: "DIRECTOR" },
  { name: "ACTOR", value: "ACTOR" },
];

const Register = (props: Props) => {
  const [userFullName, setUserFullName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userRole, setUserRole] = useState("");

  const handleCreateUser = (e) => {
    e.preventDefault();
    if (!userRole || !userEmail || !userFullName || !userPassword) {
      alert("Please fill all inputs");
      return;
    }

    let data = {
      fullName: userFullName,
      email: userEmail,
      password: userPassword,
      role: userRole,
    };
    axios
      .post("https://manageapp.onrender.com/auth/register", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    redirect("/");
  };
  return (
    <>
      {/* <Header fullName={userFullName} role={userRole} /> */}
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
          width: "50rem",
          // paddingTop: "2.5rem",
          // paddingBottom: "2.5rem",
          marginTop: "2rem",
          padding: "4rem",
          backgroundColor: "#F0EEED",
          borderRadius: "1rem",
        }}
      >
        <Row>
          <Col>
            <h1>Register</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  onChange={(e) => {
                    setUserFullName(e.target.value);
                  }}
                  autoComplete="username"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => {
                    setUserEmail(e.target.value);
                  }}
                  autoComplete="email"
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
                    setUserPassword(e.target.value);
                  }}
                  autoComplete="new-password"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Role</Form.Label>
                <Form.Check>
                  <ToggleButtonGroup type="radio" name="options">
                    {radios.map((radio, idx) => (
                      <ToggleButton
                        key={idx}
                        id={`radio-${idx}`}
                        type="radio"
                        variant={"outline-primary"}
                        name="radio"
                        value={radio.value}
                        checked={userRole === radio.value}
                        onChange={(e) => setUserRole(e.currentTarget.value)}
                      >
                        {radio.name}
                      </ToggleButton>
                    ))}
                  </ToggleButtonGroup>
                </Form.Check>
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                onClick={(e) => {
                  handleCreateUser(e);
                }}
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Register;
