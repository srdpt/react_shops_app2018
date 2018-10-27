import React from "react";
import {
  SidebarDiv,
  IconContainer,
  SidebarIcon
} from "../styles/containers/side_bar";
import FilterIcon from "../icons/FilterIcon.png";
import ListIcon from "../icons/ListIcon.png";
import PropTypes from "prop-types";

export default class Sidebar extends React.Component {
  static propTypes = {
    handleFilterClick: PropTypes.func.isRequired
  };

  render() {
    const { handleFilterClick } = this.props;
    return (
      <SidebarDiv>
        <IconContainer onClick={handleFilterClick}>
          <SidebarIcon src={FilterIcon} style={{ paddingTop: "5px" }} />
        </IconContainer>
        <IconContainer>
          <SidebarIcon src={ListIcon} style={{ paddingTop: "10px" }} />
        </IconContainer>
      </SidebarDiv>
    );
  }
}
