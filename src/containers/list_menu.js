import React from "react";
import PropTypes from "prop-types";
import { List, ListItem, Divider } from "@material-ui/core";
import { colors, fonts, fontSizes } from "../lib/theme";

export default class ListMenu extends React.Component {
  state = {
    pointMenu: false,
    selectedStore: {}
  };

  static propTypes = {
    stores: PropTypes.arrayOf(PropTypes.obj).isRequired,
    onPointClick: PropTypes.func.isRequired,
    selectedStore: PropTypes.func.isRequired
  };

  handlePointClick = () => {
    this.setState({ pointMenu: true });
    this.props.onPointClick(this.state.pointMenu);
  };

  setStore = currStore => {
    this.setState({ selectedStore: currStore });
    this.props.selectedStore(this.state.selectedStore);
  };

  setStore = this.setStore.bind(this);

  render() {
    return (
      <div>
        <List>
          {this.props.stores.map(store => (
            <div onClick={() => this.setStore(store)} key={store.key}>
              <ListItem onClick={this.handlePointClick}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p
                    style={{
                      color: `${colors.darkBrown}`,
                      fontFamily: `${fonts.lato}, sans-serif`,
                      fontSize: `20px`
                    }}
                  >
                    {store.name}
                  </p>
                  <p
                    style={{
                      color: `${colors.brown}`,
                      fontSize: `${fontSizes.regular}`,
                      fontFamily: `${fonts.lato}, sans-serif`
                    }}
                  >
                    {store.address}
                  </p>
                </div>
              </ListItem>
              <Divider />
            </div>
          ))}
        </List>
      </div>
    );
  }
}
