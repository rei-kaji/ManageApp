import axios from "axios";
import React, { useEffect, useState } from "react";
// import { getMe, getActors } from "../Hooks/homeFunction.jsx";
import Header from "../components/Header";
import { Card, Container, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
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

if (token) {
  axios.defaults.headers.common["Authorization"] = `${token}`;
} else {
  window.location.href = "/login";
}

const Index = (props: Props) => {
  // const [loading, setLoading] = useState(false);
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
        <Container style={{ marginTop: "5rem", paddingBottom: "2.5rem" }}>
          <h1 id="actor-title" className="mb-5">
            List of Actors
          </h1>
          <div id="list-actor">
            {actorsData.map((actor) => {
              const { height, weight, eyes } = actor.physical_information;
              const { facebook, linkedIn } = actor.social;
              return (
                <Card style={{ width: "18rem" }} key={actor.fullName}>
                  <Card.Img
                    variant="top"
                    src={
                      actor.avatar ??
                      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                    }
                    // height="320"
                    alt={actor.fullName + " avatar"}
                  />

                  <Card.Body>
                    <Card.Title className="card-title">
                      ${actor.fullName}
                    </Card.Title>
                    <Card.Text className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                  <ListGroup variant="flush">
                    <ListGroupItem>
                      <Link to={facebook}>Facebook</Link>
                    </ListGroupItem>
                    <ListGroupItem>
                      <Link to={linkedIn}>LinkedIn</Link>
                    </ListGroupItem>
                    <ListGroupItem>Eye color: {eyes}</ListGroupItem>
                  </ListGroup>
                </Card>
              );
            })}
          </div>
        </Container>
      </main>
    </>
  );
};

export default Index;
