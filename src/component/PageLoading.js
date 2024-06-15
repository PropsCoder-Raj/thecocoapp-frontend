import React from "react";
import { Box } from "@mui/material";
import SettingsContext from "src/context/SettingsContext";

const styles = {
  root: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "center",
    left: 0,
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 2000,
    // backgroundColor: "#fff", // Uncomment if you want to use this
  },
  loader1: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  loader: {
    maxWidth: "500px",
    padding: "0px 30px",
  },
};

export default function PageLoading() {
  const themeSetting = React.useContext(SettingsContext);

  return (
    <Box sx={styles.root}>
      <Box sx={styles.loader1}>
        <Box sx={styles.loader}>
          {/* <LinearProgress /> */}
          {themeSetting.settings.theme === "DARK" ? (
            <img
              src="images/Logo.png"
              alt="loader"
              style={{ maxWidth: "300px" }}
            />
          ) : (
            <img
              src="/images/Logo.png"
              alt="loader"
              style={{ maxWidth: "300px" }}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
}
