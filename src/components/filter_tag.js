import React from "react";
import PropTypes from "prop-types";
import { colors } from "../lib/theme";
import Select from "react-select";
import {
  TagContainer,
  tagStyle,
  expansionStyles,
  titleExpansion
} from "../styles/components/filter_components";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default class TagList extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    filterList: PropTypes.arrayOf(PropTypes.obj).isRequired,
    multiOptions: PropTypes.bool.isRequired
  };

  render() {
    const { title, filterList, multiOptions } = this.props;
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
          {title}
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <TagContainer>
            <Select
              options={filterList}
              isMulti={multiOptions}
              styles={tagStyle}
            />
          </TagContainer>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}
