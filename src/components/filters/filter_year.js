import React from "react";
import PropTypes from "prop-types";
import { colors } from "../../lib/theme";
import "bootstrap/dist/css/bootstrap.min.css";
import Select from "react-select";
import { allYears } from "../../constants/year_lists";
import {
  YearContainer,
  YearText,
  yearSelect,
  expansionStyles,
  titleExpansion
} from "../../styles/components/filter_components";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default class YearList extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  };

  state = {
    yearMin: null,
    yearMax: null
  };

  handleMin = yearMin => {
    this.setState({ yearMin });
    console.log(this.state.yearMin);
  };

  handleMin = this.handleMin.bind(this);

  handleMax = yearMax => {
    this.setState({ yearMax });
    console.log(this.state.yearMax);
  };

  handleMax = this.handleMax.bind(this);

  render() {
    return (
      <ExpansionPanel style={expansionStyles}>
        <ExpansionPanelSummary
          style={titleExpansion}
          expandIcon={
            <ExpandMoreIcon
              style={{
                color: `${colors.darkBrown}`
              }}
            />
          }
        >
          Filter By Year
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <YearContainer>
            <Select
              options={allYears}
              isMulti={false}
              styles={yearSelect}
              onChange={this.handleMin}
            />
            <YearText> to </YearText>
            <Select
              options={allYears}
              isMulti={false}
              styles={yearSelect}
              onChange={this.handleMax}
            />
          </YearContainer>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}
