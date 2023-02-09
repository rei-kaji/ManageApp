import React from "react";
import Loader from "../components/Loader";
import { useLocation } from "react-router-dom";

type Props = {};

const CastAgency = (props: Props) => {
  const location = useLocation();
  const returnInfo = location.state;
  console.log("returnInfo", returnInfo);
  return <>{returnInfo}</>;
};

export default CastAgency;
