import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { Link, redirect } from "react-router-dom";
import getMe from "../Hooks/getMe.js";
import getCastAgency from "../Hooks/getCastAgency";

type Props = {};

interface Actors {
  actors: [id: string];
}
interface CastAgency {
  name: string;
  location: string;
  phoneNumber: string;
  website: string;
  email: string;
  bio: string;
  logo: string;
  since: number;
  actors: string[];
  user: string;
}
let token = localStorage.getItem("token");

const CastAgency = (props: Props) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `${token}`;
  } else {
    alert("You have to login first!");
    window.location.href = "/";
  }
  const [userFullName, setUserFullName] = useState("");
  const [userRole, setUserRole] = useState("");
  const [castAgencyData, setCastAgencyData] = useState<CastAgency[]>([]);

  useEffect(() => {
    getMe({ setUserFullName, setUserRole });
    getCastAgency({ setCastAgencyData, token });
  }, []);
  // console.log("castAgencyData", castAgencyData);

  if (!castAgencyData) {
    alert("There aren't any agency.");
    window.location.href = "/home";
  }
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
            {castAgencyData.map((castAgency, index) => {
              return (
                <Col
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  key={`${index}${castAgency.name}`}
                  className="mb-4"
                >
                  <Card>
                    <Card.Img
                      variant="top"
                      src={
                        castAgency.logo ??
                        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                      }
                      alt={castAgency.name + " avatar"}
                    />
                    <Card.Body>
                      <Card.Title className="card-title text-center">
                        {castAgency.name}
                      </Card.Title>
                      <Card.Text className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <Card.Text>Location: {castAgency.location}</Card.Text>
                        <Card.Text>
                          Phone Number: {castAgency.phoneNumber}
                        </Card.Text>
                        <Card.Text>
                          <Link to={castAgency.website}>Website</Link>
                        </Card.Text>
                        <Card.Text>Email: {castAgency.email}</Card.Text>
                        <Card.Text>Biography: {castAgency.bio}</Card.Text>
                        <Card.Text>Since: {castAgency.since}</Card.Text>
                        {/* <Card.Text>Actors: {castAgency.actors}</Card.Text> */}
                      </ListGroup.Item>
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

export default CastAgency;
