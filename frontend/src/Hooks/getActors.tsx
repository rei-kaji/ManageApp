import axios from "axios";
import React from "react";

type Props = {};

const getActors = async ({ setActorsData }) => {
  axios.get("http://localhost:3001/api/actors/").then((data) => {
    const { actors } = data.data;
    setActorsData(actors);
    // console.log("actorsData", actorsData);
  });
};

export default getActors;
