import React, { Component } from "react";
import BottomBar from "./containers/bottom_bar";
import SideMenu from "./containers/side_menu";
import MapContainer from "./containers/map_container";
import * as firebase from "firebase";
import { initFire } from "./store/firebase";
import { createYearList } from "./constants/year_lists";
import SearchBar, { searchBar } from "./components/search_bar";

class App extends Component {
  state = {
    currStores: [],
    searchBar: []
  };
  componentWillMount = () => {
    initFire();
    createYearList();
    const dataRef = firebase.database().ref("/shops/");
    let temp = [];
    dataRef.on("child_added", snapshot => {
      let item = snapshot.val();
      //TODO: filter by year
      temp.push({
        key: item.g,
        lat: parseFloat(item.data.latitude, 10),
        lon: parseFloat(item.data.longitude, 10),
        yearOpened: parseInt(item.data.opened_in_year, 10),
        sestiere: item.data.setiere_code,
        address: item.data.street_and_number,
        nace: item.data.ateco_code,
        type: item.data.store_type,
        name: item.data.store_name,
        isCorporate: item.data.corporate_ownership,
        ethnicity: item.data.ethnic_ownership
      });
      this.setState({ currStores: temp });
    });
  };

  createSearchBarData = () => {
    let temp = [];
    this.state.currStores.map(store => {
      temp.push({ value: store.name, label: store.name });
      console.log(temp);
    });
    this.setState({ searchBar: temp });
  };

  render() {
    return (
      <div>
        <SideMenu currStores={this.state.currStores} />
        <MapContainer stores={this.state.currStores} />
        <BottomBar currStores={this.state.searchBar} />
      </div>
    );
  }
}

export default App;
