import React from "react";
import { AboutText } from "../styles/containers/bottom_bar";
import { AppBar, Toolbar } from "@material-ui/core";
import { colors } from "../lib/theme";
import SearchBar from "../components/search_bar";
import PropTypes from "prop-types";

export default class BottomBar extends React.Component {
  static propTypes = {
    stores: PropTypes.arrayOf(PropTypes.obj).isRequired
  };

  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          top: "auto",
          bottom: 0,
          backgroundColor: `${colors.lightBrown}`,
          flexDirection: "row",
          justifyContent: "flex-start",
          height: "65px"
        }}
      >
        <Toolbar>
          <SearchBar currStores={this.props.stores} />
          <div style={{ paddingTop: "5px", paddingLeft: "225px" }}>
            <AboutText>Venice Project Center Shopp Mapp App 2.0</AboutText>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}
