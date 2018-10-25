import * as firebase from "firebase";

export const stores = [];

export const initFire = () => {
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
};
