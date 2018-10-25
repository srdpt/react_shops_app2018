import React from "react";
import Sidebar from "./side_bar";
import { slide as Menu } from "react-burger-menu";
import CheckList from "../components/filter_check";
import { colors, fonts, fontSizes } from "../lib/theme";
import { ethnicity, corp, twoAns } from "../constants/filter_lists";
import TagList from "../components/filter_tag";
import { allTags } from "../constants/nace_list.js";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import YearList from "../components/filter_year";
import RadioList from "../components/filter_radio";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const styles = {
  bmMenu: {
    background: `${colors.lightBeige}`,
    paddingTop: "20px"
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)"
  }
};

const expansionStyles = {
  backgroundColor: `${colors.lightBeige}`
};

const titleExpansion = {
  color: `${colors.brown}`,
  fontFamily: `${fonts.lato}, sans-serif`,
  fontSize: `${fontSizes.large}`
};
export default class FilterMenu extends React.Component {
  state = {
    openMenu: false,
    storeTypes: [],
    ethnicity: [],
    ownership: "",
    plateatici: "",
    maxYear: "",
    minYear: 2012,
    maxYear: 2012
  };

  clickedFilter = () => {
    this.setState({ openMenu: !this.state.openMenu });
  };

  handleApply = () => {};

  handleClick = () => {};

  render() {
    const { openMenu } = this.state;
    return (
      <div>
        <Sidebar handleFilterClick={this.clickedFilter} />
        <Menu
          width={"400px"}
          right
          customBurgerIcon={false}
          isOpen={openMenu}
          styles={styles}
        >
          <div>
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
                Store Types
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <TagList
                  title={"Store Types"}
                  filterList={allTags}
                  multiOptions={true}
                />
              </ExpansionPanelDetails>
            </ExpansionPanel>
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
                Ethnicity
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <CheckList title={"Ethnicity"} filterList={ethnicity} />
              </ExpansionPanelDetails>
            </ExpansionPanel>
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
                Ownership
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <RadioList title={"Ownership"} filterList={corp} />
              </ExpansionPanelDetails>
            </ExpansionPanel>
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
                Plateatici
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <RadioList title={"Plateatici"} filterList={twoAns} />
              </ExpansionPanelDetails>
            </ExpansionPanel>
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
                <YearList title={"Filter By Year"} />
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              paddingTop: "50px",
              justifyContent: "center"
            }}
          >
            <Button
              style={{
                color: `${colors.white}`,
                backgroundColor: `${colors.brown}`,
                width: "100px",
                marginRight: `50px`
              }}
              onClick={this.handleApply}
            >
              Apply
            </Button>
            <Button
              style={{
                color: `${colors.darkBrown}`,
                backgroundColor: `${colors.lightBrown}`,
                width: "100px"
              }}
              onClick={this.handleCancel}
            >
              Cancel
            </Button>
          </div>
        </Menu>
      </div>
    );
  }
}
