import { calculateTimeLeft } from "../views/auth/otp-timer/timer";
import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const setSession = (accessToken) => {
  if (accessToken) {
    window.localStorage.setItem("creatturAccessToken", accessToken);
    // Set additional session information if needed
  } else {
    window.localStorage.removeItem("creatturAccessToken");
    // Remove additional session information if needed
  }
};

const checkLogin = () => {
  const accessToken = window.localStorage.getItem("creatturAccessToken");
  return !!accessToken;
};

export default function AuthProvider(props) {
  const [isLogin, setIsLogin] = useState(checkLogin());
  const [endTime, setEndtime] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    if (endTime) {
      const timer = setTimeout(() => {
        setTimeLeft(calculateTimeLeft(endTime));
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [endTime, timeLeft]);

  const userLogIn = (token) => {
    setSession(token);
    setIsLogin(true);
  };

  const userLogOut = () => {
    setSession(null);
    setIsLogin(false);
  };

  const data = {
    isLogin,
    isLoading,
    timeLeft,
    setEndtime,
    setTimeLeft,
    userLogIn,
    userLogOut,
    setIsLoading,
  };

  return (
    <AuthContext.Provider value={data}>{props.children}</AuthContext.Provider>
  );
}
