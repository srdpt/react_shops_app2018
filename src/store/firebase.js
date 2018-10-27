import firebase from "firebase";

export const dataDict = [];

var config = {
  apiKey: "AIzaSyC0irXhh2E1ajz5Dd_6TAd5z2MqQCYm0sg",
  authDomain: "shopp-mapp-app-1540459083700.firebaseapp.com",
  databaseURL: "https://shopp-mapp-app-1540459083700.firebaseio.com",
  projectId: "shopp-mapp-app-1540459083700",
  storageBucket: "shopp-mapp-app-1540459083700.appspot.com",
  messagingSenderId: "856865559762"
};
const fire = firebase.initializeApp(config);

export const pointsFromYear = yearStr => {
  //in firebase as store locations + year and stores + year
  let temp = [];
  const dataRef = fire.database().ref("shopp-mapp-app-1540459083700/");
  dataRef.on("value", snapshot => {
    let items = snapshot.val();
    for (let item in items) {
      if (item.birth_certificate.type === "MERGE current stores") {
        temp.push({
          storeName: item.data.store_name,
          lat: item.birth_certificate.g.lat,
          lon: item.birth_certificate.g.lon,
          econCode: item.data.ateco_code,
          isCorporate: item.data.corporate_ownership,
          ethnicity: item.data.ethnic_ownership,
          opened: item.data.opened_in_year,
          lastKnownYr: item.data.last_known_open_year,
          sestiere: item.data.sestiere_name,
          address: item.data.street_and_number,
          yearCollected: item.data.year_data_collected,
          type: item.data.store_type
        });
        console.log(temp);
      }
    }
  });
};
