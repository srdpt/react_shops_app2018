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
    width: "200px"
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: `${colors.lightBeige}`,
      color: `${colors.darkBrown}`,
      cursor: isDisabled ? "not-allowed" : "default",
      fontFamily: `${fonts.lato}, sans-serif`
    };
  },
  multiValue: (styles, { data }) => {
    return {
      ...styles,
      backgroundColor: `${colors.darkBrown}`
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

export default class CheckList extends React.Component {
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
            display: "flex",
            borderBottom: `1px solid ${colors.brown}`,
            width: "300px"
          }}
          onClick={this.handleTitleClick}
        >
          <BoxTitle>{title}</BoxTitle>
          <ArrowIcon src={DownIcon} style={{ right: "0px" }} />
        </div>
        <div
          style={
            listOpen
              ? { display: "block", paddingTop: "25px" }
              : { display: "none", paddingTop: "25px" }
          }
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
