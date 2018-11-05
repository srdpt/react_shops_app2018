import React from "react";
import PropTypes from "prop-types";
import { List, ListItem, Divider } from "@material-ui/core";
import { colors, fonts, fontSizes } from "../lib/theme";

export default class ListMenu extends React.Component {
  static propTypes = {
    stores: PropTypes.arrayOf(PropTypes.obj).isRequired
  };

  render() {
    return (
      <div>
        <List>
          {this.props.stores.map(store => (
            <div>
              <ListItem>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p
                    style={{
                      color: `${colors.darkBrown}`,
                      fontFamily: `${fonts.arvo}, sans-serif`,
                      fontSize: `${fontSizes.large}`
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
