import React from "react";
import { Box, Container } from "@mui/material";
const style = {
  mainBox: {
    display: "grid",
    gap: "20px",
    margin: "60px auto",
    maxWidth: "660px",
    textAlign: {
      xs: "center",
      sm: "center",
      md: "start",
    },
    "@media(max-width:1000px)": {
      margin: "50px auto",
    },
    "@media(max-width:767px)": {
      margin: "30px auto",
    },
  },
};

function ModuleComponent(props) {
 
  return (
    <Container maxWidth="lg">
      <Box sx={style.mainBox}>
       
      </Box>
    </Container>
  );
}

export default ModuleComponent;
