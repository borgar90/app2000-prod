/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";

// Material Kit 2 React example components
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import SimpleFooter from "examples/Footers/SimpleFooter";

// Material Kit 2 React page layout routes
import routes from "routes";

// Images
import bgImage from "assets/images/banner/banner.png";

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleConfirmPasswordChange = (event) => {
    setConfirmPass(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const isEmailValid = (email) => {
    // Regular expression for a basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isPasswordValid = (password) => {
    // Regular expression for password validation (min 6 characters, at least one uppercase letter, and at least one digit)
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
    return passwordRegex.test(password);
  };

  useEffect(() => {
    // Auto-redirect after 2 seconds if registration is successful
    if (success && showAlert) {
      const timeoutId = setTimeout(() => {
        // Redirect to login page
        navigate("/authentication/sign-in"); //er redirect riktig løsning? alternativer?
      }, 3000);

      // Clear the timeout if the component unmounts before the 2 seconds
      return () => clearTimeout(timeoutId);
    }
  }, [success, showAlert, navigate]);

  const handleRegister = () => {
    if (!email || !isEmailValid(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!password || !isPasswordValid(password)) {
      setError(
        "Password must be at least 6 characters long, contain at least one uppercase letter, and at least one digit."
      );
      return;
    }

    // Password confirmation
    if (password !== confirmPass) {
      setError("Passwords do not match.");
      return;
    }
    setSuccess(true);
    setError(""); // Reset error message
    setShowAlert(false); // Hide alert

    axios
      .post("http://localhost:3001/api/v1/grandmasterssmith/register", {
        //TODO use HUSSEINS API
        data: {
          attributes: {
            email: email,
            password: password,
          },
        },
      })
      .then((response) => {
        // Handle the successful response
        console.log("Registration successful:", response);

        // Set success message
        setSuccess(true);
        setShowAlert(true);
      })
      .catch((error) => {
        // Handle errors
        console.error("Registration error:", error.response);
        setError("Registration failed. Please try again.");
      });
  };

  return (
    <>
      {/* Display success message */}
      {success && showAlert && (
        <div
          style={{
            backgroundColor: "green",
            color: "white",
            padding: "20px",
            borderRadius: "5px",
            marginBottom: "10px",
            position: "absolute",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: "99",
            top: "30vh",
          }}
        >
          Registration successful! You will now be redirected to sign in.
        </div>
      )}
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-react",
          label: "free download",
          color: "dark",
        }}
      />

      <MKBox
        position="absolute"
        top={0}
        left={0}
        zIndex={1}
        width="100%"
        minHeight="100vh"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <MKBox px={1} width="100%" height="100vh" mx="auto" position="relative" zIndex={2}>
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
          <Grid item xs={12} sm={10} md={8} lg={4} xl={3}>
            <Card>
              <MKBox mx={2} mt={0} p={2} mb={1} textAlign="center">
                <MKTypography variant="h3" fontWeight="fontWeightRegular" color="grey" mt={1}>
                  Register
                </MKTypography>

                <div className="flex flex-row items-center justify-center mt-3 gap-2">
                  <div className="flex flex-row items-center justify-self-start">
                    <MKTypography
                      variant="body2"
                      className="justify-self-start "
                      fontWeight="medium"
                      color="grey"
                      mt={1}
                    >
                      Create account with:
                    </MKTypography>
                  </div>
                  <div className="flex flex-row items-center justify-self-end gap-1">
                    <MKTypography component={MuiLink} href="#" variant="body1" color="grey">
                      <FacebookIcon color="inherit" fontSize="large" />
                    </MKTypography>
                    <MKTypography component={MuiLink} href="#" variant="body1" color="grey">
                      <GitHubIcon color="inherit" fontSize="large" />
                    </MKTypography>
                    <MKTypography component={MuiLink} href="#" variant="body1" color="grey">
                      <GoogleIcon color="inherit" fontSize="large" />
                    </MKTypography>
                  </div>
                </div>
              </MKBox>
              <hr />
              <div className="flex flex-col items-center justify-self-center">
                <MKTypography
                  variant="body2"
                  className="justify-self-center "
                  fontWeight="medium"
                  color="grey"
                  mt={3}
                >
                  or fill in required data:
                </MKTypography>
              </div>
              <MKBox pt={4} pb={3} px={3}>
                <MKBox component="form" role="form">
                  <MKTypography variant="subtitle1">Userinfo: *</MKTypography>
                  <hr className="mb-3 mt-1" />
                  <MKBox mb={2}>
                    <MKTypography variant="subtitle2">Email: *</MKTypography>
                    <MKInput type="email" onChange={handleEmailChange} label="Email" fullWidth />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKTypography variant="subtitle2">Password: *</MKTypography>
                    <MKInput
                      type="password"
                      onChange={handlePasswordChange}
                      label="Password"
                      fullWidth
                    />
                  </MKBox>
                  <MKBox mb={5}>
                    <MKTypography variant="subtitle2">Confirm password: *</MKTypography>
                    <MKInput
                      type="password"
                      onChange={handleConfirmPasswordChange}
                      label="Confirm password"
                      fullWidth
                    />
                  </MKBox>

                  <MKBox mt={4} mb={1}>
                    <MKButton variant="gradient" color="dark" fullWidth onClick={handleRegister}>
                      Register
                    </MKButton>
                  </MKBox>

                  {/* TODO: Display success message */}
                  {(success && <p style={{ color: "green" }}>Registration successful!</p>) ||
                    (error && <p style={{ color: "red" }}>{error}</p>)}

                  <MKBox mt={3} mb={1} textAlign="center">
                    <MKTypography variant="button" color="text">
                      Allready have an account?{" "}
                      <MKTypography
                        component={Link}
                        to="/authentication/sign-up/cover"
                        variant="button"
                        color="black"
                        fontWeight="medium"
                        textGradient
                      >
                        Sign in
                      </MKTypography>
                    </MKTypography>
                  </MKBox>
                </MKBox>
              </MKBox>
            </Card>
          </Grid>
        </Grid>
      </MKBox>
      <MKBox
        width="100%"
        position="absolute"
        zIndex={2}
        bottom="0"
        py="20px"
        className="bg-black"
        style={{ background: "linear-gradient(195deg, #42424a, #191919)" }}
      >
        <SimpleFooter light />
      </MKBox>
    </>
  );
}

export default Register;
