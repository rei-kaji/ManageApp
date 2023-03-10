import React from "react";
import { Link } from "react-router-dom";

// const host = "localhost:3001";
// type Props = {};
const Links = {
  // Home: `${host}/api/users/`,
  // Posts: `${host}/api/posts/`,
  // CastAgency: `${host}/api/castagencies/`,

  Home: `/`,
  Profile: `/profile`,
  Register: `/register`,
  Login: `/login`,
};

const LinkTo = (page) => {
  // console.log("page", page.page);
  const pageTitle = page.page;
  let link;
  let a = "Home";
  switch (pageTitle) {
    case "Home":
      link = Links.Home;
      break;
    case "Login":
      link = Links.Login;
      break;
    case "Posts":
      link = Links.Posts;
      break;
    case "Register":
      link = Links.Register;
      break;
    default:
      link = null;
  }
  // console.log("link", link);
  return (
    <React.Fragment>
      <Link to={link}>{pageTitle}</Link>
    </React.Fragment>
  );
};

export default LinkTo;
