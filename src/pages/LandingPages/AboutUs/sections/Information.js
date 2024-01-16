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
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

function Information() {
  return (
    <MKBox component="section" py={0}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={8}>
            <Grid container justifyContent="flex-start">
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="public"
                    color="dark"
                    title="Fully integrated chess AI"
                    description="We've developed the website with a fully integrated chess AI. This allows you to play against the computer."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="payments"
                    color="dark"
                    title="Tournaments"
                    description="We've organized a set of tournaments to allow you to compete against other players."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="apps"
                    color="dark"
                    title="Tudoring"
                    description="We've created a tudoring program to allow you to improve your chess skills."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="3p"
                    color="dark"
                    title="Community"
                    description="We've created a community to allow you to interact with other players."
                  />
                </MKBox>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 2, lg: 3 }, mb: { xs: 3, lg: 5 } }}>
            <CenteredBlogCard
              image="https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              title="Get insights on Players"
              description="Website visitors today demand a social user expericence — and that’s what we give them."
              action={{
                type: "internal",
                route: "pages/company/about-us",
                color: "dark",
                label: "find out more",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
