import React from "react";
import Map from "../components/map";
import {
  Container,
  ContainerElement
} from "../styles/containers/map_container";

export default class MapContainer extends React.Component {
  render() {
    //TODO: add map api to .config
    return (
      <Container>
        <Map
          stores={this.props.stores}
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyBo03-1oZ9hOXS1wRn7I7E3mo-Zioxb2I8&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<ContainerElement />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </Container>
    );
  }
}
