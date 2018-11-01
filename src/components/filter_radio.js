import React from "react";
import PropTypes from "prop-types";
import { colors } from "../lib/theme";
import { ButtonGroup, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  unselected,
  selected,
  GroupContainer,
  expansionStyles,
  titleExpansion
} from "../styles/components/filter_components";

export default class RadioList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rSelected: []
    };
    this.propTypes = {
      title: PropTypes.string.isRequired,
      filterList: PropTypes.arrayOf(PropTypes.obj).isRequired
    };
    this.onRadio = this.onRadio.bind(this);
  }

  onRadio = rSelected => {
    this.setState({ rSelected });
  };

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
          <GroupContainer>
            <ButtonGroup vertical>
              {filterList.map(item => (
                <Button
                  style={
                    this.state.rSelected === item.key ? selected : unselected
                  }
                  onClick={() => this.onRadio(item.key)}
                >
                  {item.label}
                </Button>
              ))}
            </ButtonGroup>
          </GroupContainer>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}
