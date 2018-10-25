import React, { Component } from "react";
import PropTypes from "prop-types";
import DownIcon from "../icons/DownIcon.png";
import { BoxDiv, BoxTitle, ArrowIcon } from "../styles/components/check_list";
import { fonts, fontSizes, colors } from "../lib/theme";
import Select from "react-select";

const customSelect = {
  control: styles => ({
    ...styles,
    backgroundColor: `${colors.lightBeige}`,
    width: "275px"
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      color: `${colors.darkBrown}`,
      cursor: isDisabled ? "not-allowed" : "default",
      fontFamily: `${fonts.lato}, sans-serif`,
      width: "275px"
    };
  },
  multiValue: (styles, { data }) => {
    return {
      ...styles,
      backgroundColor: `${colors.lightBrown}`,
      color: `${colors.darkBrown}`
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: `${colors.lightBeige}`
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: `${colors.darkBrown}`
  })
};

export default class TagList extends React.Component {
  state = {
    listOpen: false
  };
  static propTypes = {
    title: PropTypes.string.isRequired,
    filterList: PropTypes.arrayOf(PropTypes.obj).isRequired,
    multiOptions: PropTypes.bool.isRequired
  };

  handleTitleClick = () => {
    this.setState({ listOpen: !this.state.listOpen });
  };

  render() {
    const { title, filterList, multiOptions } = this.props;
    const { listOpen } = this.state;
    return (
      <div style={{ marginLeft: "30px" }}>
        <div
          style={{
            display: "block",
            paddingTop: "25px",
            paddingLeft: "15px",
            paddingBottom: "15px"
          }}
        >
          <Select
            options={filterList}
            isMulti={multiOptions}
            styles={customSelect}
          />
        </div>
      </div>
    );
  }
}
