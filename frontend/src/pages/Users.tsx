import React, { useEffect, useState } from "react";

const host = "localhost:3001";
type Props = {};

const Users = (s) => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllUsers] = useState(null);

  const fetchAllUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${host}/api/users/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSON.stringify({
        //   email: "rei@gmail.com",
        //   password: "123456",
        // }),
      });
      //   console.log("response", response);
      if (response.ok) {
        const result = await response.json();
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
