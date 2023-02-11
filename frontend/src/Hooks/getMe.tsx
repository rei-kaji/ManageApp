import axios from "axios";
import React, { useState } from "react";

type Props = {};

// const [userFullName, setUserFullName] = useState("");
// const [userRole, setUserRole] = useState("");

const getMe = async ({ setUserFullName, setUserRole }) => {
  await axios
    .get("https://manageapp.onrender.com/me")
    .then((data) => {
      const { fullName, role } = data.data.user;
      // console.log("fullName", fullName);
      setUserFullName(fullName);
      setUserRole(role);
    })
    .catch((err) => {
      console.log("Something error happen on getMe: ", err);
    });
};

export default getMe;
