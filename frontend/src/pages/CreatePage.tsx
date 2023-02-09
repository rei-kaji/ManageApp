import React from "react";
import { useLocation } from "react-router-dom";
import CreateActor from "../components/CreateActor";
import CreateAgency from "../components/CreateAgency";

type Props = {};

const CreatePage = (props: Props) => {
  const location = useLocation();
  const returnInfo = location.state;
  console.log("returnInfo", returnInfo);
  return (
    <>
      <CreateActor />
      <CreateAgency />
      <p>{returnInfo.state}</p>
    </>
  );
};

export default CreatePage;
