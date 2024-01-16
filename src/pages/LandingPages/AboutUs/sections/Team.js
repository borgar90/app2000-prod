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

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images
import abdallah from "assets/images/about/people/abdallah.png";
import borgar from "assets/images/about/people/borgar.jpg";
import erik from "assets/images/about/people/eriktobias.png";
import hussein from "assets/images/about/people/hussein.jpg";
import kevin from "assets/images/about/people/kevin.png";

function Team() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              The Executive Team
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              We are a team of passionate people whose goal is to improve. With this site we hope to
              improve the chess community.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={erik}
                name="Erik-Tobias Huseby Ellefsen"
                position={{ color: "dark", label: "UI Designer" }}
                description="lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={borgar}
                name="Borgar Flaen Stensrud"
                position={{ color: "dark", label: "Lead programer" }}
                description="Borgar Flaen Stensrud is a developer with 17 years of development experience. He has developed sites in c#, php, javascript, html, css, and more."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={abdallah}
                name="Abdallah Amidu Ndikumana"
                position={{ color: "dark", label: "Athlete" }}
                description="lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={kevin}
                name="Kevin Tomasz Matarewicz"
                position={{ color: "dark", label: "JS Developer" }}
                description="lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={hussein}
                name="Hussein Abdul-Ameer"
                position={{ color: "dark", label: "JS Developer" }}
                description="lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
