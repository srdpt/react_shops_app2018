import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import StoreMarker from "../components/store_marker";

const resident = require("../icons/resident-24px.svg");
const mixed = require("../icons/mixed-24px.svg");
const tourist = require("../icons/tourist-24px.svg");

const Map = withScriptjs(
  withGoogleMap(props => {
    const markers = props.stores.map(store => {
      if (store.grouping === "Resident") {
        return (
          <StoreMarker
            key={store.key}
            store={store}
            location={{
              lat: store.lat,
              lng: store.lon
            }}
            icon={resident}
          />
        );
      } else if (store.grouping === "Tourist") {
        return (
          <StoreMarker
            key={store.key}
            store={store}
            location={{
              lat: store.lat,
              lng: store.lon
            }}
            icon={tourist}
          />
        );
      } else {
        return (
          <StoreMarker
            key={store.key}
            store={store}
            location={{
              lat: store.lat,
              lng: store.lon
            }}
            icon={mixed}
          />
        );
      }
    });

    return (
      <GoogleMap defaultZoom={15} center={{ lat: 45.435, lng: 12.335 }}>
        {markers}
      </GoogleMap>
    );
  })
);

export default Map;
