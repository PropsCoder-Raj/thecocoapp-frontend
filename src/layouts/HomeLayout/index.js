import React, { useEffect } from "react";
import PropTypes from "prop-types";
import TopBar from "./TopBar";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";


const styles = {
  root: {
    // display: "flex",
    height: "100%",
    // overflow: "hidden",
    width: "100%",
  },
  wrapper: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
    paddingTop: "179px",
    backgroundPosition: "unset",
    backgroundSize: "cover",
    minHeight: "100vh",

    "@media(max-width:960px)": {
      paddingTop: "140px",
    },
    "@media(max-width:600px)": {
      paddingTop: "80px !important",
    },
    // backgroundColor:"#0D2124"
  },
  wrapperAuth: {
    flex: "1 1 auto",
    overflow: "hidden",
    paddingTop: "63px",
    backgroundPosition: "unset",
    backgroundSize: "cover",
  },
  contentContainer: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
  },
  content: {
    flex: "1 1 auto",
    height: "100%",
    overflow: "hidden",
  },
  contentLoginDiv: {
    margin: "auto",
    maxWidth: "686px",
    padding: "20px",
    marginTop: "5px",
    paddingBottom: "5px",
  },
  contentLogin: {
    minHeight: "fit-content",
    maxWidth: "686px",
    overflowY: "auto",
    borderRadius: "10px",
    padding: "28px",
    color: "#1A1919",
    background: "#F5F5F5",
    boxShadow: "3px 4px 9px 0px rgba(0, 0, 0, 0.25)",
    marginBottom: "10px",
    "&::-webkit-scrollbar": {
      width: "5px",
    },
    "&::-webkit-scrollbar-track": {
      margin: "40px 0 40px 0",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#172624",
      borderRadius: "20px !important",
    },
    "@media(max-width:600px)": {
      padding: "20px",
    },
    "@media(max-width:960px)": {
      margin: "20px",
    },
  },
  forgetAuth: {
    height: " -webkit-fill-available",
    alignItems: "center",
    display: "grid",
  },
  forgetWrapper: {
    height: "calc(100vh - 63px)",
    overflow: "auto",
  },
};

const MainLayout = ({ children }) => {

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <Box sx={styles.root}>
      <TopBar />

      {location.pathname === "/login" ||
      location.pathname === "/register" ||
      location.pathname === "/forget-password" ||
      location.pathname === "/verify-otp" ||
      location.pathname === "/company-information" ||
      location.pathname === "/reset-password" ? (
        <Box
          sx={`${styles.wrapperAuth} ${
            [
              "/forget-password",
              "/verify-otp",
              "/company-information",
              "/reset-password",
            ].includes(location.pathname)
              ? styles.forgetWrapper
              : ""
          }`}
        >
          <Box
            sx={`${styles.contentLoginDiv} ${
              ["/forget-password", "/verify-otp", "/reset-password"].includes(
                location.pathname
              )
                ? styles.forgetAuth
                : ""
            }`}
          >
            <Box sx={styles.contentLogin}>{children}</Box>
          </Box>
        </Box>
      ) : (
        <Box
          sx={styles.wrapper}
          style={
            location.pathname === "/map" || location.pathname === "/verify"
              ? { minHeight: "auto" }
              : {}
          }
        >
          <Box sx={styles.contentContainer}>
            <Box sx={styles.content}>{children}</Box>
          </Box>{" "}
        </Box>
      )}
    </Box>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
