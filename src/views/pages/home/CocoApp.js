import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { redirectToMail } from "src/utils";

const StyledImg = styled("img")(({ theme }) => ({
  width: "-webkit-fill-available",
  height: "auto",
}));
const DeskTopTitle = styled("h1")(({ theme }) => ({
  fontWeight: 700,
  fontSize: "56px",
  fontFamily: "'Nunito Sans', sans-serif",
  margin: "0",
  lineHeight: "72px",
  [theme.breakpoints.down("md")]: {
    fontSize: "42px",
    lineHeight: "58px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "32px",
    lineHeight: "42px",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "26px",
    lineHeight: "38px",
  },
}));

function CocoApp() {


  return (
    <Container maxWidth="lg">
      <Box mt={3} mb={3}>
        <Grid container spacing={4}>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            sx={{
              display: {
                xs: "block",
                sm: "block",
                md: "none",
              },
            }}
          >
            <Box>
              <StyledImg alt="heroSection" src="images/schoolTeacher.png" />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            sx={{
              textAlign: {
                xs: "center",
                sm: "center",
                md: "start",
              },
            }}
          >
            <img
              alt=""
              className="positionAbosolute EnergyIconPositionContactSection"
              src="images/energy-icon.svg"
              style={{ top: "unset !important" }}
            />
            <Box sx={{ display: "grid", gap: "20px" }}>
              <DeskTopTitle>
                Cocoapp
                <br /> for Schools
              </DeskTopTitle>
              <Box sx={{ maxWidth: "493px" }}>
                <Typography variant="h6">
                  Teachers, we’re here to help you! Our free tools support your
                  students as they learn finance through the Cocoapp, both in
                  and out of the classroom.
                </Typography>
              </Box>
              <Button
                onClick={() => redirectToMail("edupartners@thecocoapp.com")}
                variant="contained"
                sx={{
                  margin: { xs: "auto", sm: "auto", md: "0" },
                  width: "260px",
                }}
              >
                Contact us
              </Button>
            </Box>
            <img
              alt=""
              className="positionAbosolute StarIconPositionContactSection"
              src="images/star-icon.svg"
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "block",
              },
            }}
          >
            <Box>
              <StyledImg alt="heroSection" src="images/schoolTeacher.png" />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default CocoApp;
