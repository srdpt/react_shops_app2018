import React from "react";
import { Marker } from "react-google-maps";

export default class StoreMarker extends React.Component {
  render() {
    return <Marker position={this.props.location} />;
  }
}
