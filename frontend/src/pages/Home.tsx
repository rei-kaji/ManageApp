import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { Link, redirect } from "react-router-dom";
import getMe from "../Hooks/getMe.js";
import getActors from "../Hooks/getActors";

interface Actor {
  avatar: string;
  fullName: string;
  physical_information: {
    height: string;
    weight: string;
    eyes: string;
  };
  social: {
    facebook: string;
    linkedIn: string;
  };
}

type Props = {};
let token = localStorage.getItem("token");

const Index = (props: Props) => {
  // const [loading, setLoading] = useState(false);
  if (token) {
    axios.defaults.headers.common["Authorization"] = `${token}`;
  } else {
    // console.log("Home");
    alert("You have to login first!");
    window.location.href = "/";
  }
  const [userFullName, setUserFullName] = useState("");
  const [userRole, setUserRole] = useState("");
  const [actorsData, setActorsData] = useState<Actor[]>([]);

  useEffect(() => {
    getMe({ setUserFullName, setUserRole });
    getActors({ setActorsData });
  }, []);

  return (
    <>
      <Header fullName={userFullName} role={userRole} />
      <main>
        <Container style={{ marginTop: "5rem" }}>
          <h1
            id="actor-title"
            className="mb-5 text-center"
            style={{ color: "white" }}
          >
            List of Actors
          </h1>
          <Row
            id="list-actor"
            style={{
              // padding: "2.5rem",
              padding: "4rem",
              backgroundColor: "#F0EEED",
              borderRadius: "1rem",
              // marginBottom: "5rem",
            }}
          >
            {actorsData.map((actor) => {
              const { height, weight, eyes } = actor.physical_information;
              const { facebook, linkedIn } = actor.social;
              return (
                <Col
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  key={actor.fullName}
                  className="mb-4"
                >
                  <Card>
                    <Card.Img
                      variant="top"
                      src={
                        actor.avatar ??
                        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                      }
                      alt={actor.fullName + " avatar"}
                    />
                    <Card.Body>
                      <Card.Title className="card-title text-center">
                        {actor.fullName}
                      </Card.Title>
                      <Card.Text className="card-text"></Card.Text>
                    </Card.Body>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <Link to={facebook}>Facebook</Link>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Link to={linkedIn}>LinkedIn</Link>
                      </ListGroup.Item>
                      <ListGroup.Item>Eye color: {eyes}</ListGroup.Item>
                    </ListGroup>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </main>
    </>
  );
};

export default Index;
