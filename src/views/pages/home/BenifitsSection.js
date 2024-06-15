import React from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import styled from "@emotion/styled";
import Paper from "@mui/material/Paper";

const style = {
  paperBox: {
    display: "grid",
    gap: "16px",
    alignItem: "center",
    padding: "20px",
    width: "-webkit-fill-available",
    minHeight: "440px",
    "@media(max-width:600px)": {
       minHeight: "auto"
    },
  },
  innerBox: {
    display: "grid",
    gap: "8px",
  },
};
const StyledImg = styled("img")(({ theme }) => ({
  width: "100%",
  height: "auto",
}));

const BoxCenter = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
}));
function BenifitsSection() {
  const CardData = [
    {
      title: "Enhances school’s reputation",
      cardText:
        "Schools that collaborate with Cocoapp will be at the forefront of equipping students with crucial financial literacy skills. ",
      img: "images/cardImage.png",
    },
    {
      title: "Standard aligned curriculum",
      cardText:
        "Our team of experienced educators, finance professionals is dedicated to empowering the next generation with the knowledge.",
      img: "images/cardImage1.png",
    },
    {
      title: "Student progress insights",
      cardText:
        "See how your students are progressing with in-depth insights like accuracy and time spent learning.",
      img: "images/cardImage2.png",
    },
  ];

  return (
    <Container maxWidth="lg">
      <Box mt={2} mb={4}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <BoxCenter>
              <Typography variant="h1">
                Benefits of Integrating Cocoapp
              </Typography>
            </BoxCenter>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={4}>
              {CardData.map((value, index) => {
                return (
                  <Grid
                    item
                    xs={12}
                    sm={index === 2 ? 12 : 6}
                    md={4}
                    sx={{
                      transition: "transform 0.3s ease-in-out",
                      "&:hover": {
                        transform: "scale(1.1)",
                      },
                    }}
                  >
                    <Paper
                      style={{
                        border: "1px solid #D8E5EE",
                      }}
                    >
                      <Box sx={style.paperBox}>
                        <StyledImg src={value.img} alt="icon" />

                        <Typography variant="h3">{value.title}</Typography>
                        <Typography variant="h6">{value.cardText}</Typography>
                      </Box>
                    </Paper>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default BenifitsSection;
