import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export default function AuthProvider(props) {
  const [profile, setProfile] = useState({});

  const getViewMyProfile = async (values) => {
    // const token = localStorage.getItem("token");

    try {
     
setProfile({})
    } catch (error) {
     
      
    }
  };
  useEffect(() => {
    if (window.localStorage.getItem("token") && window.location.pathname !== "/") {
      getViewMyProfile();
    }
  }, []);

  let data = {
    profile,
    getViewMyProfile: () => getViewMyProfile(),
  };

  return (
    <UserContext.Provider value={data}>{props.children}</UserContext.Provider>
  );
}
