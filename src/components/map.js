import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  MarkerClusterer
} from "react-google-maps";
import StoreMarker from "../components/store_marker";

const Map = withScriptjs(
  withGoogleMap(props => {
    const markers = props.stores.map(store => (
      <StoreMarker
        key={store.key}
        store={store}
        location={{
          lat: store.lat,
          lng: store.lon
        }}
      />
    ));

    return (
      <GoogleMap defaultZoom={14} center={{ lat: 45.43, lng: 12.33 }}>
        {markers}
      </GoogleMap>
    );
  })
);

export default Map;
