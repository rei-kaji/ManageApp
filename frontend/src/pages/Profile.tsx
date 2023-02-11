import axios from "axios";
import React, { useEffect, useState } from "react";
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
import Header from "../components/Header";
import getMe from "../Hooks/getMe";
import Modal from "react-bootstrap/Modal";
import { redirect } from "react-router-dom";

type Props = {};

const radios = [
  { name: "USER", value: "USER" },
  { name: "AGENCY", value: "AGENCY" },
  { name: "DIRECTOR", value: "DIRECTOR" },
  { name: "ACTOR", value: "ACTOR" },
];

const avatarSample =
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80";

const agencyInfoGroup = [
  {
    label: "Agency Name",
    type: "text",
    placeholder: "ex. Aurora",
    changeInfo: "name",
  },
  {
    label: "Location",
    type: "text",
    placeholder: "ex. Vancouver, BC",
    changeInfo: "location",
  },
  {
    label: "Phone Number",
    type: "text",
    placeholder: "xxx-xxx-xxxx",
    changeInfo: "phoneNumber",
  },
  {
    label: "Website",
    type: "text",
    placeholder: "ex. https://..",
    changeInfo: "website",
  },
  {
    label: "Email",
    type: "email",
    placeholder: "ex. asd@example.com",
    changeInfo: "email",
  },
  {
    label: "Bio",
    type: "text",
    placeholder: "ex. We are working with ...",
    changeInfo: "bio",
    required: true,
  },
  {
    label: "Logo",
    type: "text",
    placeholder: "ex. https://..",
    changeInfo: "logo",
    required: true,
  },
  {
    label: "Since",
    type: "number",
    placeholder: "ex. 2000",
    changeInfo: "since",
    required: true,
  },
];

const Profile = (props: Props) => {
  const [userFullName, setUserFullName] = useState("");
  const [userRole, setUserRole] = useState("");
  const [showUpdateProfile, setUpdateProfile] = useState(false);
  const [showCreateAgency, setCreateAgency] = useState(false);
  const [showAddActor, setAddActor] = useState(false);
  const [userProfileRadioValue, setUserProfileRadioValue] = useState("");
  const [agencyInfo, setAgencyInfo] = useState({
    name: "",
    location: "",
    phoneNumber: "",
    website: "https://facebook",
    email: "",
    bio: "",
    logo: avatarSample,
    since: 20230101,
  });
  const [actorInfo, setActorInfo] = useState({
    fullName: "",
    age: 18,
    gender: "MALE",
    avatar: avatarSample,
    physical_information: {
      height: 170,
      weight: 60,
      eyes: "",
    },
    social: {
      facebook: "https://facebook",
      linkedIn: "https://linkedin",
    },
  });
  const [actorPhysicalInfo, setActorPhysicalInfo] = useState({
    height: 170,
    weight: 60,
    eyes: "",
  });
  const [actorSocialInfo, setActorSocialInfo] = useState({
    facebook: "",
    linkedIn: "",
  });

  const handleClose = (buttonName) => {
    switch (buttonName) {
      case "profile":
        setUpdateProfile(false);
        redirect("/profile");
        break;
      case "agency":
        setCreateAgency(false);
        redirect("/profile");
        break;
      case "actor":
        setAddActor(false);
        redirect("/profile");
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

  const handleUpdateUserProfile = (e) => {
    e.preventDefault();
    if (!userProfileRadioValue) {
      alert("Please select role!");
    }
    setUserRole(userProfileRadioValue);
    // setUserProfileRadioValue("");
    // console.log("userProfileRadioValue", userProfileRadioValue);
    // console.log("userRole", userRole);
    let data = {
      fullName: userFullName,
      role: userProfileRadioValue,
    };

    axios
      .put("https://manageapp.onrender.com/update", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCreateAgency = (e) => {
    e.preventDefault();
    let phoneNumber = agencyInfo.phoneNumber.replace(/-/g, "");

    if (
      agencyInfo.name === "" ||
      agencyInfo.location === "" ||
      phoneNumber === "" ||
      agencyInfo.website === "" ||
      agencyInfo.email === "" ||
      agencyInfo.bio === "" ||
      agencyInfo.logo === "" ||
      agencyInfo.since === null
    ) {
      alert("Please fill all inputs");
      return;
    }

    axios
      .post("https://manageapp.onrender.com/api/agency/", agencyInfo)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCreateActor = (e) => {
    e.preventDefault();

    actorInfo.physical_information = actorPhysicalInfo;
    actorInfo.social = actorSocialInfo;

    // console.log("actorInfo", actorInfo);

    if (
      actorInfo.fullName === "" ||
      actorInfo.age === null ||
      actorInfo.gender === "" ||
      actorInfo.avatar === "" ||
      actorInfo.physical_information === null ||
      actorInfo.social === null
    ) {
      alert("Please fill all inputs");
      return;
    }

    axios
      .post("https://manageapp.onrender.com/api/actors/", actorInfo)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMe({ setUserFullName, setUserRole });
  }, []);

  return (
    <>
      <Header fullName={userFullName} role={userRole} />
      <main>
        <Container
          style={{
            marginTop: "2rem",
            padding: "4rem",
            backgroundColor: "#F0EEED",
            borderRadius: "1rem",
          }}
        >
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
              <Col xs={12} md={2} style={{ marginBottom: "1.5rem" }}>
                <Button
                  variant="outline-dark"
                  onClick={() => {
                    handleShow("profile");
                  }}
                >
                  Update profile
                </Button>
              </Col>
              <Col xs={12} md={2} style={{ marginBottom: "1.5rem" }}>
                <Button
                  variant="outline-dark"
                  onClick={() => {
                    handleShow("agency");
                  }}
                >
                  Create Agency
                </Button>
              </Col>
              <Col xs={12} md={2} style={{ marginBottom: "1.5rem" }}>
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
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="email"
                  value={userFullName}
                  onChange={(e) => {
                    setUserFullName(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Role</Form.Label>
                <Form.Check>
                  <ToggleButtonGroup
                    type="radio"
                    name="options"
                    // defaultValue={1}
                  >
                    {radios.map((radio, idx) => (
                      <ToggleButton
                        key={idx}
                        id={`radio-${idx}`}
                        type="radio"
                        variant={"outline-primary"}
                        name="radio"
                        value={radio.value}
                        checked={userProfileRadioValue === radio.value}
                        onChange={(e) =>
                          setUserProfileRadioValue(e.currentTarget.value)
                        }
                      >
                        {radio.name}
                      </ToggleButton>
                    ))}
                  </ToggleButtonGroup>
                </Form.Check>
              </Form.Group>
            </Form>
          </Modal.Body>
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
              onClick={(e) => {
                handleUpdateUserProfile(e);
                handleClose("profile");
              }}
            >
              Update
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal
          show={showCreateAgency}
          onHide={() => handleClose("agency")}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Create Agency</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              {agencyInfoGroup.map(
                ({ label, type, placeholder, changeInfo, required }) => (
                  <Form.Group
                    className="mb-3"
                    controlId="formBasicText"
                    key={label}
                  >
                    <Form.Label>{label}</Form.Label>
                    <Form.Control
                      type={type}
                      placeholder={placeholder}
                      onChange={(e) =>
                        setAgencyInfo((prevState) => ({
                          ...prevState,
                          [changeInfo]: e.target.value,
                        }))
                      }
                      required={required}
                    />
                  </Form.Group>
                )
              )}
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => handleClose("agency")}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={(e) => {
                handleCreateAgency(e);
                handleClose("agency");
              }}
            >
              Create
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
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="full name"
                  onChange={(e) => {
                    setActorInfo((prevState) => ({
                      ...prevState,
                      fullName: e.target.value,
                    }));
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>age</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="ex. 18"
                  onChange={(e) => {
                    setActorInfo((prevState) => ({
                      ...prevState,
                      age: parseInt(e.target.value),
                    }));
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Gender</Form.Label>
                <Form.Select
                  onChange={(e) => {
                    setActorInfo((prevState) => ({
                      ...prevState,
                      gender: e.target.value,
                    }));
                  }}
                >
                  <option value="MALE">MALE</option>
                  <option value="FEMALE">FEMALE</option>
                  <option value="OTHER">OTHER</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Avatar</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="ex. https://..."
                  onChange={(e) => {
                    let avatarUrl = avatarSample;
                    if (e.target.value) {
                      avatarUrl = e.target.value;
                    }
                    setActorInfo((prevState) => ({
                      ...prevState,
                      avatar: avatarUrl,
                    }));
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Height</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="170"
                  onChange={(e) => {
                    setActorPhysicalInfo((prevState) => ({
                      ...prevState,
                      height: parseInt(e.target.value),
                    }));
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Weight</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="60"
                  onChange={(e) => {
                    setActorPhysicalInfo((prevState) => ({
                      ...prevState,
                      weight: parseInt(e.target.value),
                    }));
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Eyes Color</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="blue"
                  onChange={(e) => {
                    setActorPhysicalInfo((prevState) => ({
                      ...prevState,
                      eyes: e.target.value,
                    }));
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Facebook</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  onChange={(e) => {
                    let facebookUrl = sampleUrl;
                    if (e.target.value) {
                      facebookUrl = e.target.value;
                    }
                    setActorSocialInfo((prevState) => ({
                      ...prevState,
                      facebook: facebookUrl,
                    }));
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>LinkedIn</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  onChange={(e) => {
                    let linkedInUrl = sampleUrl;
                    if (e.target.value) {
                      linkedInUrl = e.target.value;
                    }
                    setActorSocialInfo((prevState) => ({
                      ...prevState,
                      linkedIn: linkedInUrl,
                    }));
                  }}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
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
              onClick={(e) => {
                handleCreateActor(e);
                handleClose("actor");
              }}
            >
              Create
            </Button>
          </Modal.Footer>
        </Modal>
      </main>
    </>
  );
};

export default Profile;
