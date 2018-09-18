import React from "react";
import { AboutText, BottomNavContainer } from "../styles/containers/bottom_bar";

const BottomBar = () => (
  <BottomNavContainer>
    <AboutText>About the Map</AboutText>
    <AboutText> | </AboutText>
    <AboutText>About the Center</AboutText>
  </BottomNavContainer>
);

export default BottomBar;
