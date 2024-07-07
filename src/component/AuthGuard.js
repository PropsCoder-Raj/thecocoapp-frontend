import React, { useContext, useEffect } from "react";
// import { Redirect } from "react-router-dom";
import { AuthContext } from "src/context/Auth";
import { useNavigate } from "react-router-dom";
import PageLoading from "./PageLoading";

export default function AuthGuard(props) {
  const { children } = props;
  const navigate = useNavigate();
  const auth = localStorage.getItem("token");
  
  useEffect(() => {
    if (!auth) {
      navigate("/login");
    }
  }, [auth, navigate]);

  return auth ? <>{children}</> : <PageLoading />;
}
