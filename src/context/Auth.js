import { calculateTimeLeft } from "../views/auth/otp-timer/timer";
import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const setSession = (accessToken) => {
  if (accessToken) {
    window.localStorage.setItem("creatturAccessToken", accessToken);
  } else {
    window.localStorage.removeItem("creatturAccessToken");
  }
};

const checkLogin = () => {
  const accessToken = window.localStorage.getItem("creatturAccessToken");
  return !!accessToken;
};

export default function AuthProvider(props) {
  const [isLogin, setIsLogin] = useState(checkLogin());
  const [endTime, setEndTime] = useState(() => {
    const storedEndTime = window.localStorage.getItem("otpEndTime");
    return storedEndTime ? parseInt(storedEndTime, 10) : null;
  });
  const [isLoading, setIsLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(() => {
    const storedEndTime = window.localStorage.getItem("otpEndTime");
    return storedEndTime
      ? calculateTimeLeft(parseInt(storedEndTime, 10))
      : null;
  });

  useEffect(() => {
    if (endTime) {
      window.localStorage.setItem("otpEndTime", endTime);
      const timer = setInterval(() => {
        const timeLeft = calculateTimeLeft(endTime);
        setTimeLeft(timeLeft);
        if (timeLeft.total <= 0) {
          window.localStorage.removeItem("otpEndTime");
          setEndTime(null);
          setTimeLeft(null);
          clearInterval(timer);
        }
      }, 1000);
      return () => clearInterval(timer);
    } else {
      window.localStorage.removeItem("otpEndTime");
    }
  }, [endTime]);

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
    setEndTime,
    setTimeLeft,
    userLogIn,
    userLogOut,
    setIsLoading,
  };

  return (
    <AuthContext.Provider value={data}>{props.children}</AuthContext.Provider>
  );
}
