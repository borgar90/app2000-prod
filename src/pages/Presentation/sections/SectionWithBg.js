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
import Tooltip from "@mui/material/Tooltip";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images

import bgImage from "../../../assets/images/chess/AboutSectionFrontPageBg.png";

function SectionWithBg() {
  return (
    <MKBox component="section" py={{ xs: 0, sm: 12 }}>
      <MKBox
        variant="gradient"
        position="relative"
        style={{
          backgroundImage: "url(" + bgImage + ")",
          backgroundSize: "100% 100%",
          backgroundPosition: "0% 0%",
          backgroundRepeat: "no-repeat",
        }}
        sx={{ overflow: "hidden" }}
      >
        {/* <MKBox
          component="img"
          src={bgImage}
          alt="pattern-lines"
          position="absolute"
          top={0}
          left={0}
          width="100%"
          zIndex={1}
          opacity={1}
        /> */}
        <Container sx={{ position: "relative", zIndex: 2, py: 10 }}>
          <div
            className="flex flex-col"
            style={{ justifyContent: "space-between", marginLeft: "170px", width: "425px" }}
          >
            <MKTypography variant="h3" style={{ color: "#226dbf" }}>
              About Our
            </MKTypography>
            <MKTypography variant="h2" style={{ color: "#226dbf" }}>
              Chess Journey
            </MKTypography>

            <MKTypography variant="body" mt={1} style={{ color: "#226dbf" }} mb={1}>
              Unlock the World of Chess Excellence <br /> An APP-2000 Project (2023/2024)
            </MKTypography>

            <MKTypography variant="body2" color="black" mb={4}>
              <p className="mb-2">
                Join a global community of chess enthusiasts, from beginners to masters, brought
                together by a shared love for the game. Immerse yourself in the rich tapestry of
                chess experiences, from thrilling matches to expert insights.
              </p>
              <p className="">
                Our mission at the University of South-Eastern Norway, Midt-Telemark, was to craft a
                chess trainer intertwined with a vibrant social network for chess players. Ready to
                make your move? Learn more about our project.
              </p>
            </MKTypography>
            <MKButton
              variant="gradient"
              size="large"
              component="a"
              href="https://www.creative-tim.com/product/material-kit-react"
              sx={{ mb: 2 }}
              style={{ backgroundColor: "#226dbf", color: "white" }}
            >
              Learn more
            </MKButton>
          </div>
        </Container>
      </MKBox>
      <Container>
        <Grid container item xs={6} mx="auto">
          <MKBox textAlign="center">
            <MKTypography variant="h3" mt={6} mb={3}>
              Available on these technologies
            </MKTypography>
            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={4} lg={2}>
                <Tooltip title="Bootstrap 5 - Most popular front-end component library">
                  <MKBox
                    component="a"
                    href="https://www.creative-tim.com/product/material-kit"
                    target="_blank"
                  >
                    <MKBox
                      component="img"
                      src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/bootstrap5.jpg"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={2}>
                <Tooltip title="Comming soon">
                  <MKBox
                    opacity={0.5}
                    component="a"
                    href="#"
                    target="_blank"
                    onClick={(e) => e.preventDefault()}
                  >
                    <MKBox
                      component="img"
                      src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/icon-tailwind.jpg"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={2}>
                <Tooltip title="Comming soon">
                  <MKBox
                    opacity={0.5}
                    component="a"
                    href="#"
                    target="_blank"
                    onClick={(e) => e.preventDefault()}
                  >
                    <MKBox
                      component="img"
                      src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/vue.jpg"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={2}>
                <Tooltip title="Comming soon">
                  <MKBox
                    opacity={0.5}
                    component="a"
                    href="#"
                    target="_blank"
                    onClick={(e) => e.preventDefault()}
                  >
                    <MKBox
                      component="img"
                      src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/angular.jpg"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={2}>
                <Tooltip title="Comming soon">
                  <MKBox
                    component="a"
                    href="https://www.creative-tim.com/product/material-kit-react"
                    target="_blank"
                  >
                    <MKBox
                      component="img"
                      src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/react.jpg"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={2}>
                <Tooltip title="Comming soon">
                  <MKBox
                    opacity={0.5}
                    component="a"
                    href="#"
                    target="_blank"
                    onClick={(e) => e.preventDefault()}
                  >
                    <MKBox
                      component="img"
                      src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/sketch.jpg"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
            </Grid>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default SectionWithBg;
