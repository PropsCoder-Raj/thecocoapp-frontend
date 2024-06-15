import { Box } from "@mui/material";
import React from "react";
import { useNavigate } from 'react-router-dom';



const Logo = (props) => {
  const navigate = useNavigate();

  return (
    <Box >
     
        <img
          onClick={() => navigate('/login')}
          src="/images/Logo.png"
          alt="Logo"
          style={{ cursor: "pointer", width: "80px", }}
          {...props}
        />
    </Box>
  );
};

export default Logo;
