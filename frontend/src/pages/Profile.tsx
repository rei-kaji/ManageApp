import axios from "axios";
import React, { useEffect, useState } from "react";
import { Badge, Button, Col, Container, Form, Row } from "react-bootstrap";
import Header from "../components/Header";
import getMe from "../Hooks/getMe";
import Modal from "react-bootstrap/Modal";

type Props = {};

const Profile = (props: Props) => {
  const [userFullName, setUserFullName] = useState("");
  const [userRole, setUserRole] = useState("");
  const [showUpdateProfile, setUpdateProfile] = useState(false);
  const [showCreateAgency, setCreateAgency] = useState(false);
  const [showAddActor, setAddActor] = useState(false);

  const handleClose = (buttonName) => {
    switch (buttonName) {
      case "profile":
        setUpdateProfile(false);
        break;
      case "agency":
        setCreateAgency(false);
        break;
      case "actor":
        setAddActor(false);
        break;
    }
  };
  const handleShow = (buttonName) => {
    switch (buttonName) {
      case "profile":
        setUpdateProfile(true);
        break;
      case "agency":
        setCreateAgency(true);
        break;
      case "actor":
        setAddActor(true);
        break;
    }
  };

  useEffect(() => {
    getMe({ setUserFullName, setUserRole });
  }, []);

  // console.log("userFullName", userFullName);
  return (
    <>
      <Header fullName={userFullName} role={userRole} />
      <main>
        <Container style={{ paddingTop: "4rem" }}>
          <Container fluid>
            <Row>
              <h1 style={{ fontSize: "3rem", fontWeight: "700" }}>
                {userFullName}
              </h1>
            </Row>
            <Row>
              <h3 style={{ fontSize: "1.75rem" }}>
                <Badge bg="secondary">{userRole}</Badge>
              </h3>
            </Row>
            <Row>
              <p style={{ fontSize: "1.5rem" }}>
                You can change your information!
              </p>
            </Row>
            <Row xs="auto">
              <Col>
                <Button
                  variant="outline-dark"
                  onClick={() => {
                    handleShow("profile");
                  }}
                >
                  Update profile
                </Button>
              </Col>
              <Col>
                <Button
                  variant="outline-dark"
                  onClick={() => {
                    handleShow("agency");
                  }}
                >
                  Create Agency
                </Button>
              </Col>
              <Col>
                <Button
                  variant="outline-dark"
                  onClick={() => {
                    handleShow("actor");
                  }}
                >
                  Add Actor
                </Button>
              </Col>
            </Row>
          </Container>
        </Container>

        {/* <!-- TODO: Get data and set update or create function --> */}
        <Modal
          show={showUpdateProfile}
          onHide={() => {
            handleClose("profile");
          }}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Update profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => {
                handleClose("profile");
              }}
            >
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                handleClose("profile");
              }}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal
          show={showCreateAgency}
          onHide={() => {
            handleClose("agency");
          }}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Create Agency</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => {
                handleClose("agency");
              }}
            >
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                handleClose("agency");
              }}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal
          show={showAddActor}
          onHide={() => {
            handleClose("actor");
          }}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Add Actor</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => {
                handleClose("actor");
              }}
            >
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                handleClose("actor");
              }}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </main>
    </>
  );
};

export default Profile;
