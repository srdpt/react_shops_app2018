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

const queryGroup = async yearStr => {
  const url = `http://ckdata2.herokuapp.com/api/v1/dataset.json?group_name=stores ${yearStr}`;
  const response = await fetch(url);
  const data = await response.json();
  data.forEach(entry => {
    const newStore = {
      g: entry.content.primary_address_id,
      data: {
        ateco_code: entry.content.ateco_code,
        opened_in_year: entry.content.opened_in_year,
        corporate_ownership: entry.content.corporate_ownership,
        ethnic_ownership: entry.content.ethnic_ownership,
        store_name: entry.content.store_name,
        store_type: entry.content.store_type,
        year_data_collected: "2012"
      }
    };
    firebase
      .database()
      .ref("/shops/")
      .push(newStore);
  });
};

const addLoc = async yearStr => {
  const url = `http://ckdata2.herokuapp.com/api/v1/dataset.json?group_name=store locations ${yearStr}`;
  const response = await fetch(url);
  const data = await response.json();
  const ref = firebase.database().ref("/shops/");
  ref.on("child_added", snapshot => {
    let item = snapshot.val();
    let key = snapshot.key;
    data.forEach(entry => {
      if (item.g === entry.content.primary_address_id) {
        const locValues = {
          latitude: entry.content.latitude,
          longitude: entry.content.longitude,
          street_and_number: entry.content.street_and_number,
          setiere_code: entry.content.setiere_code
        };
        firebase
          .database()
          .ref("/shops/" + key + "/data/")
          .push(locValues);
      }
    });
  });
};
