import React from "react";
import Map from "../components/map";

export default class MapContainer extends React.Component {
  render() {
    //TODO: add map api to .config
    return (
      <div style={{ height: "100%", width: "100%" }}>
        <Map
          stores={this.props.stores}
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyBo03-1oZ9hOXS1wRn7I7E3mo-Zioxb2I8&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={
            <div
              style={{
                height: "47vmax",
                width: "200vmin",
                marginTop: "-1rem",
                marginLeft: "-1rem",
                marginRight: "-1rem"
              }}
            />
          }
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}
