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
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/chess/info.png";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";

import rook from "assets/images/chess/rook.png";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                className="no-overlay"
                style={"background-image"}
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    Master the game,
                    <br />
                    unleash your potential
                  </>
                }
                description="Your Ultimate Chess Playground

Welcome to the world's premier chess community. Engage with the game like never before on our revolutionary platform. Here's what sets us apart:"
              />
              <RotatingCardBack
                image={bgBack}
                title="Unleash Your Chess Mastery"
                description="Enhance your chess skills with access to an extensive library of openings, strategies, and tactics. 
                Connect with chess enthusiasts, learn from grandmasters, and take your game to the next level."
                action={{
                  type: "internal",
                  route: "/sections/page-sections/page-headers",
                  label: "start with tutorials",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  customIcon={rook}
                  title="Connected Through Play:"
                  description="
Experience the thrill of player vs. player chess on a grand scale.
Challenge friends or make new ones. Forge epic rivalries or mentor newcomers. The choice is yours."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  customIcon={rook}
                  title="Battle-Tested AI Opponents:"
                  description="
Hone your skills against the world's most formidable chess AI.
Train against adaptive opponents that adjust to your level, offering the ultimate practice experience."
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  customIcon={rook}
                  title="A Dynamic Rating System:"
                  description="
Compete, earn, and rise through the ranks with our robust chess rating system.
Stand out as a grandmaster or rise from a novice to a seasoned player, your rating tells your chess story."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  customIcon={rook}
                  title="Designed for Chess Lovers, By Chess Lovers"
                  description="Built by avid chess enthusiasts, our platform is your playground. With a commitment to excellence, we ensure you're equipped to succeed, all while being part of a vibrant global chess community. Unleash your potential; become a part of our chess revolution today."
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
