import React from "react";
import CheckList from "../../components/filters/filter_check";
import { ethnicity, corp, twoAns } from "../../constants/filter_lists";
import TagList from "../../components/filters/filter_tag";
import { allTags } from "../../constants/nace_list.js";
import { Button } from "reactstrap";
import YearList from "../../components/filters/filter_year";
import RadioList from "../../components/filters/filter_radio";
import {
  applyButton,
  cancelButton,
  FilterButtonContainer
} from "../../styles/containers/filter_menu";

export default class FilterMenu extends React.Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}
