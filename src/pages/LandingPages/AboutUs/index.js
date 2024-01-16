/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// About Us page sections
import Information from "pages/LandingPages/AboutUs/sections/Information";
import Team from "pages/LandingPages/AboutUs/sections/Team";
import Featuring from "pages/LandingPages/AboutUs/sections/Featuring";
import Newsletter from "pages/LandingPages/AboutUs/sections/Newsletter";

// Routes
import routes from "routes";
// Images

function AboutUs() {
  return (
    <>
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
        minHeight="55vh"
        width="100%"
        variant="gradient"
        bgColor="dark"
        style={{ paddingTop: "125px" }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Work with an amazing chess site
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
              We&apos;re constantly trying to express ourselves and actualize our dreams. If you
              have the opportunity to play this game, you should take it.
            </MKTypography>
            <MKButton color="default" sx={{ color: ({ palette: { dark } }) => dark.main }}>
              create account
            </MKButton>
          </Grid>
        </Container>
      </MKBox>
      <Container style={{ padding: "0px !important", margin: "-64px 0px 32px 0px !important" }}>
        <Card
          sx={{
            p: 2,
            mx: { xs: 2, lg: 3 },
            mt: -8,
            mb: 4,
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
          }}
        >
          <Information />
          <Team />
          <Featuring className="pt-5" />
          <hr />
          <Newsletter />
        </Card>
      </Container>
    </>
  );
}

export default AboutUs;
