import React, { useCallback, useState, useEffect, useContext } from "react";
import axios from "axios";

export const useLogin = ({ data }) => {
  const loginTo = async () => {
    const options = {
      url: "/api/auth/login",
      method: "POST",
      body: data,
    };

    try {
      const res = await axios(options); // here!!
      return res;
    } catch (error: any) {
      console.log(error);
    }
  };

  return {
    loginTo,
  };
};

export default useLogin;
