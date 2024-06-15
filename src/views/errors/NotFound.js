
import { Box, Typography } from "@mui/material";
import React from "react";
import Page from "../../component/Page";

export default function NotFound(props) {
  
  return (
    <Page title="page not found!">
      <Box pt={20} >
        <Typography variant="h1" align="center">
          Oops!
        </Typography>
        <Typography variant="h1" align="center" paragraph>
          404 Not Found
        </Typography>
        <Typography variant="h4" align="center">
          Sorry, an error has occured, Requested page not found!
        </Typography>
      </Box>
    </Page>
  );
}
