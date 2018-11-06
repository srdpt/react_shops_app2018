import React from "react";
import Select from "react-select";
import { colors, fonts } from "../lib/theme";

export const searchBar = {
  control: styles => ({
    ...styles,
    backgroundColor: `${colors.white}`,
    width: "400px"
  }),
  option: (styles, { isDisabled }) => {
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
  render() {
    return (
      <div style={{ paddingTop: "5px" }}>
        <Select options={[{ value: "NA", label: "NA" }]} styles={searchBar} />
      </div>
    );
  }
}
