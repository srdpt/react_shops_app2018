import React from "react";
import { AboutText } from "../styles/containers/bottom_bar";
import { AppBar } from "@material-ui/core";
import { colors } from "../lib/theme";

const BottomBar = () => (
  <AppBar
    position="fixed"
    style={{
      top: "auto",
      bottom: 0,
      backgroundColor: `${colors.lightBrown}`,
      flexDirection: "row",
      justifyContent: "center"
    }}
  >
    <div>
      <AboutText>Shopp Mapp App 2.0</AboutText>
    </div>
  </AppBar>
);

export default BottomBar;
