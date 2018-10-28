import React, { Component } from "react";
import BottomBar from "./containers/bottom_bar";
import SideMenu from "./containers/side_menu";
import MapContainer from "./containers/map_container";

const testStores = [
  {
    key: "a",
    lat: 45.43492287,
    lon: 12.33919474,
    name: "Leather Goods Store"
  },
  {
    key: "b",
    lat: 45.43781593,
    lon: 12.33657174,
    name: "Gelateria"
  }
];

class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <SideMenu />
        <MapContainer stores={testStores} />
        <BottomBar />
      </div>
    );
  }
}

export default App;
