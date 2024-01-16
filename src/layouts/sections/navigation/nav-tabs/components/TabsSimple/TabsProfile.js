/* eslint-disable no-param-reassign */
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

import { useState } from "react";

// @mui material components

import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

function TabsProfile({ onTabChange }) {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabType = (event, newValue) => {
    setActiveTab(newValue);
    onTabChange(newValue);
  };

  return (
    <Grid container item xs={12} lg={12} className="mt-5">
      <AppBar position="static">
        <Tabs value={activeTab} onChange={handleTabType}>
          <Tab label="Posts" />
          <Tab label="Bio" />
          <Tab label="Friends" />
          <Tab label="Pictures" />
          <Tab label="Videos" />
          <Tab label="My games" />
          <Tab label="My tutorials" />
          <Tab label="ELO" />
        </Tabs>
      </AppBar>
    </Grid>
  );
}

TabsProfile.propTypes = {
  onTabChange: () => {},
};

export default TabsProfile;
