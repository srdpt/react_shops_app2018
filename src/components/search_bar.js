import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";
import { colors, fonts } from "../lib/theme";

export const searchBar = {
  control: styles => ({
    ...styles,
    backgroundColor: `${colors.white}`,
    width: "400px"
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      color: `${colors.darkBrown}`,
      cursor: isDisabled ? "not-allowed" : "default",
      fontFamily: `${fonts.lato}, sans-serif`,
      width: "100px"
    };
  }
};

export default class SearchBar extends React.Component {
  static propTypes = {
    currStores: PropTypes.arrayOf(PropTypes.obj).isRequired
  };

  render() {
    return (
      <div style={{ paddingTop: "5px" }}>
        <Select options={this.props.currStores} styles={searchBar} />
      </div>
    );
  }
}
