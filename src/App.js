import React, { Component } from "react";
import BottomBar from "./containers/bottom_bar";
import SideMenu from "./containers/side_menu";
import * as firebase from "firebase";

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

var config = {
  apiKey: "AIzaSyC0irXhh2E1ajz5Dd_6TAd5z2MqQCYm0sg",
  authDomain: "shopp-mapp-app-1540459083700.firebaseapp.com",
  databaseURL: "https://shopp-mapp-app-1540459083700.firebaseio.com",
  projectId: "shopp-mapp-app-1540459083700",
  storageBucket: "shopp-mapp-app-1540459083700.appspot.com",
  messagingSenderId: "856865559762"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

class App extends Component {
  state = {
    currStores: []
  };

  componentWillMount = () => {
    let temp = [];
    const dataRef = firebase.database().ref("/");
    dataRef.on("child_added", snapshot => {
      let item = snapshot.val();

      temp.push({
        key: item.g,
        lat: parseFloat(item.data.latitude, 10),
        lon: parseFloat(item.data.longitude, 10),
        yearOpened: parseInt(item.data.opened_in_year, 10),
        sestiere: item.data.setiere_code,
        address: item.data.street_and_number,
        nace: item.data.ateco_code,
        type: item.data.store_type,
        name: item.data.store_name
      });
      this.setState({ currStores: temp });
    });
  };

  render() {
    console.log(this.state.currStores);
    return (
      <div>
        <SideMenu />
        <MapContainer stores={this.state.currStores} />
        <BottomBar />
      </div>
    );
  }
}

export default App;
