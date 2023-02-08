import React, { useEffect, useState } from "react";

const host = "https://manageapp.onrender.com";
type Props = {};

const Users = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllUsers] = useState(null);

  const fetchAllUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${host}/api/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "rei@gmail.com",
          password: "123456",
        }),
      });
      console.log("response", response);
      if (response.ok) {
        const result = await response.json();
        console.log("result", result);
        setAllUsers(result.data.reverse());
      }
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  return <div>{allPosts}</div>;
};

export default Users;
