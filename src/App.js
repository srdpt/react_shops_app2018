import React, { Component } from "react";
import BottomBar from "./containers/bottom_bar";
import SideMenu from "./containers/side_menu";

class App extends Component {
  // Links the firebase to react app
  // Fill in the fields so it works
  constructor(props){
    super(props);
    var config = {
      apiKey: "",
      authDomain: "",
      databaseURL: "",
      projectId: "appdividend-c8a0f",
      storageBucket: "",
      messagingSenderId: ""
    };
    firebase.initializeApp(config);
  }


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
