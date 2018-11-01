import React from "react";
import Sidebar from "./side_bar";
import { slide as Menu } from "react-burger-menu";
import CheckList from "../components/filter_check";
import { ethnicity, corp, twoAns } from "../constants/filter_lists";
import TagList from "../components/filter_tag";
import { allTags } from "../constants/nace_list.js";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import YearList from "../components/filter_year";
import RadioList from "../components/filter_radio";
import {
  burgerStyle,
  applyButton,
  cancelButton,
  FilterButtonContainer
} from "../styles/containers/filter_menu";

export default class FilterMenu extends React.Component {
  state = {
    openMenu: false
  };

  clickedFilter = () => {
    this.setState({ openMenu: !this.state.openMenu });
  };

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
          styles={burgerStyle}
        >
          <div>
            <TagList
              title={"Store Types"}
              filterList={allTags}
              multiOptions={true}
            />
            <CheckList title={"Ethnicity"} filterList={ethnicity} />
            <RadioList title={"Ownership"} filterList={corp} />
            <RadioList title={"Plateatici"} filterList={twoAns} />
            <YearList title={"Filter By Year"} />
          </div>
          <FilterButtonContainer>
            <Button style={applyButton} onClick={this.handleApply}>
              Apply
            </Button>
            <Button style={cancelButton} onClick={this.handleCancel}>
              Cancel
            </Button>
          </FilterButtonContainer>
        </Menu>
      </div>
    );
  }
}
