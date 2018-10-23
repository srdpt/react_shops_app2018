import React from "react";
import { AboutText, BottomNavContainer } from "../styles/containers/bottom_bar";

const BottomBar = () => (
  <BottomNavContainer>
    <AboutText>About the Map</AboutText>
    <AboutText> | </AboutText>
    <AboutText>About the Center</AboutText>
    <div id="spacer" style={{ width: "120px" }} />
  </BottomNavContainer>
);

export default BottomBar;
