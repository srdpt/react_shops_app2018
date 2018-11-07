import React from "react";
import PropTypes from "prop-types";
import { colors } from "../../lib/theme";
import Select from "react-select";
import {
  TagContainer,
  tagStyle,
  expansionStyles,
  titleExpansion
} from "../../styles/components/filter_components";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default class TagList extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    filterList: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired
      })
    ).isRequired,
    setTags: PropTypes.func.isRequired
  };

  state = {
    tags: null
  };

  handleChange = tags => {
    this.setState({ tags });
    this.props.setTags(this.state.tags);
  };

  handleChange = this.handleChange.bind(this);

  render() {
    const { title, filterList } = this.props;
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
              isMulti={true}
              styles={tagStyle}
              onChange={this.handleChange}
            />
          </TagContainer>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}
