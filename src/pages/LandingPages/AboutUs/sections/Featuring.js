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

// Material Kit 2 React examples
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

// Images

import css3 from "assets/images/about/techStack/css3.png";
import html5 from "assets/images/about/techStack/html5.png";
import nodejs from "assets/images/about/techStack/nodejs.jpg";
import react from "assets/images/about/techStack/React.svg";
import mongodb from "assets/images/about/techStack/mongodb.jpg";

function Featuring() {
  return (
    <MKBox component="section" pt={6} pb={3}>
      <Container>
        <Grid container spacing={3} sx={{ mb: 12 }} className="justify-around">
          <Grid item xs={6} md={4} lg={2} sx={{ height: "100%" }}>
            <div style={{ aspectRatio: "1/1" }}>
              <MKBox
                component="img"
                src={css3}
                alt="CSS3"
                width="100%"
                opacity={0.7}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </Grid>
          <Grid item xs={6} md={4} lg={2} sx={{ height: "100%" }}>
            <div style={{ aspectRatio: "1/1" }}>
              <MKBox
                component="img"
                src={html5}
                alt="HTML5"
                width="100%"
                opacity={0.7}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </Grid>
          <Grid item xs={6} md={4} lg={2} sx={{ height: "100%" }}>
            <div style={{ aspectRatio: "1/1" }}>
              <MKBox
                component="img"
                src={nodejs}
                alt="NodeJS"
                width="100%"
                opacity={0.7}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>
          </Grid>
          <Grid item xs={6} md={4} lg={2} sx={{ height: "100%" }}>
            <div style={{ aspectRatio: "1/1" }}>
              <MKBox
                component="img"
                src={react}
                alt="React"
                width="100%"
                opacity={0.7}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>
          </Grid>
          <Grid item xs={6} md={4} lg={2} sx={{ height: "100%" }}>
            <div style={{ aspectRatio: "1/1" }}>
              <MKBox
                component="img"
                src={mongodb}
                alt="MongoDB"
                width="100%"
                opacity={0.7}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>
          </Grid>
        </Grid>
        <hr />
        <Grid container justifyContent="center" sx={{ textAlign: "center" }} className="mt-5">
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={5234}
              color="dark"
              separator="."
              title="Players"
              description="Chess players of Grandmasters forge"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={250}
              color="dark"
              separator="."
              suffix="+"
              title="Hours"
              description="We worked on this project"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={24}
              color="dark"
              suffix="/7"
              title="Support"
              description="Actively engage team members that are working on the project"
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Featuring;
