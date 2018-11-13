import React from "react";
import PropTypes from "prop-types";
import { List, ListItem, Divider } from "@material-ui/core";
import { colors, fonts, fontSizes } from "../../lib/theme";

export default class ListMenu extends React.Component {
  state = {
    selectedStore: {}
  };

  static propTypes = {
    stores: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string.isRequired,
        lat: PropTypes.number.isRequired,
        lon: PropTypes.number.isRequired,
        yearOpened: PropTypes.number.isRequired,
        sestiere: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
        nace: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isCorporate: PropTypes.string.isRequired,
        ethnicity: PropTypes.string.isRequired,
        collected: PropTypes.number.isRequired
      })
    ).isRequired,
    selectedStore: PropTypes.func.isRequired
  };

  setStore = currStore => {
    this.setState({ selectedStore: currStore });
    this.props.selectedStore(this.state.selectedStore);
  };

  setStore = this.setStore.bind(this);

  render() {
    return (
      <div>
        <div style={{ height: "30px" }} />
        <List>
          {this.props.stores.map(store => (
            <div onClick={() => this.setStore(store)} key={store.key}>
              <ListItem>
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
