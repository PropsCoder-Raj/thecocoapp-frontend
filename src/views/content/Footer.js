import React from "react";
import { Box, Container, Grid, Typography, Divider } from "@mui/material";
import styled from "@emotion/styled";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { redirectToMail } from "src/utils";
import { useNavigate } from "react-router-dom";


const style = {
  mappedBox: {
    display: "grid",
    gap: "30px",
  },
  paperBox: {
    display: "flex",
    gap: "16px",
    alignItem: "center",
    padding: "20px",
  },
  innerBox: {
    marginBottom: "35px",
  },
  dividerVisible: {
    display: "none",
    "@media(max-width:767px)": {
      display: "block",
      margin: "20px 0",
    },
  },
  handleBlockUnblock: {
    display: "block",
    "@media(max-width:767px)": {
      display: "none",
    },
  },
  follow: {
    display: "none",
    "@media(max-width:767px)": {
      display: "block",
      margin: "10px 0",
      textAlign: "center",
    },
  },
  handleBlock: {
    display: "none",
    "@media(max-width:767px)": {
      display: "block",
      margin: "10px 0",
      textAlign: "center",
    },
  },
};
const FlexBox = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  "@media(max-width:767px)": {
    display: "block",
  },
}));
const Logo = styled("img")({
  maxWidth: "130px",
});
const IconFlex = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "15px",
  alignItems: "center",
  "@media(max-width:767px)": {
    justifyContent: "center",
  },
}));

function Footer() {

const navigate = useNavigate();
  return (
    <Container maxWidth="lg">
      <Box mt={2} mb={4}>
        <FlexBox style={style.innerBox}>
          <Box>
            <Logo src="images/Logo.png" alt="logo" />
            <Box sx={{ maxWidth: "430px" }}>
              <Typography variant="h6">
                Cocoapp is a financial education company. Making financial
                literacy a fun adventure with interactive games, rewards, and
                lessons that empower children to make smart choices.
              </Typography>
            </Box>
          </Box>
          <Divider sx={style.dividerVisible} />
          <Box>
            <Typography variant="h4" sx={{ cursor: "pointer" }}>
              About Us
            </Typography>
            <Typography
              variant="h6"
              sx={{
                marginTop: "24px",
                cursor: "pointer",
                "&:hover": { textDecoration: "underline" },
              }}
              onClick={() => {
                navigate("/terms&condition");
              }}
            >
              Terms of service
            </Typography>
            <Typography
              variant="h6"
              sx={{
                cursor: "pointer",
                "&:hover": { textDecoration: "underline" },
              }}
              onClick={() => {
                navigate("/privacy-policy");
              }}
            >
              Privacy Policy
            </Typography>
            <Typography
              variant="h6"
              sx={{ cursor: "pointer" }}
              onClick={() => {
                redirectToMail("hello@thecocoapp.com");
              }}
            >
              Contact us
            </Typography>
          </Box>
        </FlexBox>
        <Divider />
        <FlexBox style={{ marginTop: "20px" }}>
          <Typography variant="h6" sx={style.handleBlockUnblock}>
            Copyright © 2024 Cocoapp Private Limited. All Rights Reserved
          </Typography>
          {/* <Typography variant="h6" sx={style.follow}>
            Follow us on
          </Typography>
          <IconFlex>
            <RiInstagramFill style={{ color: "#00A9DC" }} />
            <FaLinkedinIn style={{ color: "#00A9DC" }} />
            <FaYoutube style={{ color: "#00A9DC" }} />
          </IconFlex> */}
          <Typography variant="h6" sx={style.handleBlock}>
            Copyright © 2024 Cocoapp Private Limited. All Rights Reserved
          </Typography>
        </FlexBox>
      </Box>
    </Container>
  );
}

export default Footer;
