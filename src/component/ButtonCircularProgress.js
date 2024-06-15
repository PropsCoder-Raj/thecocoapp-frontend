import React from "react";
import PropTypes from "prop-types";
import { Box, CircularProgress } from "@mui/material";

const styles = {
  circularProgress: {
    // color: theme.palette.text.secondary,
    color: "#434547",
  },
};

function ButtonCircularProgress(props) {
  const { size } = props;
  return (
    <Box color="secondary.main" pl={1.5} display="flex">
      <CircularProgress
        size={size ? size : 24}
        thickness={size ? (size / 5) * 24 : 5}
        sx={styles.circularProgress}
      />
    </Box>
  );
}

ButtonCircularProgress.propTypes = {
  size: PropTypes.number,
  classes: PropTypes.object.isRequired,
};

export default ButtonCircularProgress;
