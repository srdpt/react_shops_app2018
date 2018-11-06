import React from "react";
import PropTypes from "prop-types";
import { colors, fonts, fontSizes } from "../../lib/theme";
import { List, ListItem, Divider } from "@material-ui/core";

export default class PointMenu extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  };
  render() {
    return (
      <div style={{ marginLeft: "30px" }}>
        <List>
          <ListItem>
            <p
              style={{
                color: `${colors.brown}`,
                fontSize: `${fontSizes.large}`,
                fontFamily: `${fonts.arvo}, sans-serif`
              }}
            >
              {this.props.store.name}
            </p>
          </ListItem>
          <ListItem>
            <p
              style={{
                color: `${colors.darkBrown}`,
                fontSize: `20px`,
                fontFamily: `${fonts.lato}, sans-serif`
              }}
            >
              Location
            </p>
          </ListItem>
          <Divider />
          <ListItem>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p
                style={{
                  color: `${colors.darkBrown}`,
                  fontSize: `${fontSizes.regular}`,
                  fontFamily: `${fonts.lato}, sans-serif`
                }}
              >
                {" "}
                Address: {this.props.store.address}
              </p>
              <p
                style={{
                  color: `${colors.darkBrown}`,
                  fontSize: `${fontSizes.regular}`,
                  fontFamily: `${fonts.lato}, sans-serif`
                }}
              >
                {" "}
                Sestiere: {this.props.store.sestiere}
              </p>
              <p
                style={{
                  color: `${colors.darkBrown}`,
                  fontSize: `${fontSizes.regular}`,
                  fontFamily: `${fonts.lato}, sans-serif`
                }}
              >
                {" "}
                Year Opened: {this.props.store.yearOpened}
              </p>
              <p
                style={{
                  color: `${colors.darkBrown}`,
                  fontSize: `${fontSizes.regular}`,
                  fontFamily: `${fonts.lato}, sans-serif`
                }}
              >
                {" "}
                Year Closed: Not Available
              </p>
            </div>
          </ListItem>
          <ListItem>
            <p
              style={{
                color: `${colors.darkBrown}`,
                fontSize: `20px`,
                fontFamily: `${fonts.lato}, sans-serif`
              }}
            >
              Information
            </p>
          </ListItem>
          <Divider style={{ paddingRight: "20px" }} />
          <ListItem>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p
                style={{
                  color: `${colors.darkBrown}`,
                  fontSize: `${fontSizes.regular}`,
                  fontFamily: `${fonts.lato}, sans-serif`
                }}
              >
                Economic Activity: {this.props.store.type}
              </p>
              <p
                style={{
                  color: `${colors.darkBrown}`,
                  fontSize: `${fontSizes.regular}`,
                  fontFamily: `${fonts.lato}, sans-serif`
                }}
              >
                {" "}
                Economic Code: {this.props.store.nace}
              </p>
              <p
                style={{
                  color: `${colors.darkBrown}`,
                  fontSize: `${fontSizes.regular}`,
                  fontFamily: `${fonts.lato}, sans-serif`
                }}
              >
                {" "}
                Corporate Ownership: {this.props.store.isCorporate}
              </p>
              <p
                style={{
                  color: `${colors.darkBrown}`,
                  fontSize: `${fontSizes.regular}`,
                  fontFamily: `${fonts.lato}, sans-serif`
                }}
              >
                {" "}
                Ethnicity: {this.props.store.ethnicity}
              </p>
            </div>
          </ListItem>
          <div style={{ height: "50px" }} />
        </List>
      </div>
    );
  }
}
