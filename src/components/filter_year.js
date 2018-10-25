import React from "react";
import PropTypes from "prop-types";
import DownIcon from "../icons/DownIcon.png";
import { BoxTitle, ArrowIcon } from "../styles/components/check_list";
import { fonts, colors } from "../lib/theme";
import "bootstrap/dist/css/bootstrap.min.css";
import Select from "react-select";
import { allYears } from "../constants/year_lists";

const customSelect = {
  control: styles => ({
    ...styles,
    backgroundColor: `${colors.lightBeige}`,
    width: "100px"
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      color: `${colors.darkBrown}`,
      cursor: isDisabled ? "not-allowed" : "default",
      fontFamily: `${fonts.lato}, sans-serif`,
      width: "100px"
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

export default class YearList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listOpen: false
    };
    this.propTypes = {
      title: PropTypes.string.isRequired
    };
  }

  handleTitleClick = () => {
    this.setState({ listOpen: !this.state.listOpen });
  };

  render() {
    const { title } = this.props;
    const { listOpen } = this.state;
    return (
      <div style={{ marginLeft: "30px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            paddingTop: "25px",
            paddingLeft: "15px"
          }}
        >
          <Select options={allYears} isMulti={false} styles={customSelect} />
          <p
            style={{
              color: `${colors.darkBrown}`,
              fontFamily: `${fonts.lato}, sans-serif`,
              paddingTop: "10px",
              paddingLeft: "10px",
              paddingRight: "10px"
            }}
          >
            {" "}
            to{" "}
          </p>
          <Select options={allYears} isMulti={false} styles={customSelect} />
        </div>
      </div>
    );
  }
}
