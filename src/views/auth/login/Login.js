import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  FormHelperText,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Form, Formik } from "formik";
import * as yup from "yup";
import Page from "src/component/Page";
import ApiConfig from "src/config/APICongig";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ButtonCircularProgress from "src/component/ButtonCircularProgress";
import toast from 'react-hot-toast';
import { AuthContext } from "src/context/Auth";
import moment from "moment";

function Login(props) {
  // const [isRememberMe, setIsRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
   const auth = useContext(AuthContext);
  const formInitialSchema = 
  // isRememberMe
  //   ? 
    {
      email: "",
    }
    // : {
    //   email: window.sessionStorage.getItem("email") || "",
    // };

  const handleFormSubmit = async (values) => {
    setIsLoading(true);
    try {
      const res = await axios.post(ApiConfig.loginGenerateOtp, {
        email: values.email,
      });
      if (res.status === 200) {
        toast.success(res.data.message);
        setIsLoading(false);
        navigate("/verify", {
          state: {
            email: values.email,
            type: "login",
          },
        });
       auth.setEndTime(moment().add(3, "m").unix());
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          "Something went wrong please try again later"
      );
      setIsLoading(false);
    }
  };

  return (
    <Page title="Login">
      <Box sx={{ display: "grid", gap: "13px", textAlign: "center" }}>
        <Typography variant="h1" color={"rgba(67, 69, 71, 1)"} mt={1}>
          Login
        </Typography>
        <Typography variant="h4" color={"rgba(67, 69, 71, 1)"}>
          Welcome back! Login now to see
          <br /> where you left off
        </Typography>
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={formInitialSchema}
          validationSchema={yup.object().shape({
            email: yup.string().required("Please enter your email address."),
          })}
        >
          {({
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            touched,
            values,
          }) => (
            <Form onSubmit={handleSubmit}>
              <Grid sx={{ margin: "13px 0" }}>
                <TextField
                  placeholder="Email ID"
                  type="email"
                  variant="outlined"
                  fullWidth
                  size="small"
                  inputProps={{ maxLength: 256 }}
                  value={values.email}
                  name="email"
                  error={Boolean(touched.email && errors.email)}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  SX={{ padding: "8px 13px" }}
                />
                <FormHelperText error>
                  {touched.email && errors.email}
                </FormHelperText>
              </Grid>

              <Grid>
                <Box sx={{ marginTop: "26px" }}>
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={isLoading}
                    fullWidth
                  >
                    Login
                    {isLoading && <ButtonCircularProgress />}
                  </Button>
                </Box>
                <Box
                  sx={{
                    display: "grid",
                    justifyContent: "center",
                    mt: "13px",
                  }}
                >
                  <Typography variant="body1" color={"rgba(60, 60, 60, 1)"}>
                    Don’t have an account?
                    <span
                      onClick={() => {
                        navigate("/sign-up");
                      }}
                      style={{ color: "rgba(0, 186, 242, 1)", cursor: "pointer" }}
                    >
                      &nbsp;Sign up
                    </span>
                  </Typography>
                </Box>
              </Grid>
            </Form>
          )}
        </Formik>
      </Box>
    </Page>
  );
}

export default Login;
