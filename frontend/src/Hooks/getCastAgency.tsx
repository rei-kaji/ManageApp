import axios from "axios";
import React from "react";

type Props = {};

const getCastAgency = async ({ setCastAgencyData, token }) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `${token}`;
  } else {
    alert("You have to login first!");
    window.location.href = "/";
  }

  await axios
    .get("https://manageapp.onrender.com/api/agency/")
    .then((data) => {
      setCastAgencyData(data.data.agencies);
    })
    .catch((err) => {
      console.log("Something error happen on getCastAgency: ", err);
    });
};

export default getCastAgency;
