import React, { Component } from "react";
import BottomBar from "./containers/bottom_bar";
import SideMenu from "./containers/side_menu";

class App extends Component {
  render() {
    return (
      <div>
        <SideMenu />
        <BottomBar />
      </div>
    );
  }
}

export default App;
