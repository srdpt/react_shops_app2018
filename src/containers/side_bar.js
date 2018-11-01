import React from "react";
import {
  SidebarDiv,
  IconContainer,
  SidebarIcon
} from "../styles/containers/side_bar";
import { colors } from "../lib/theme";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ViewListIcon from "@material-ui/icons/ViewList";
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
          <DashboardIcon
            style={{
              color: `${colors.brown}`,
              margin: "10 10",
              height: "40px",
              width: "40px"
            }}
          />
        </IconContainer>
        <IconContainer>
          <ViewListIcon
            style={{
              color: `${colors.brown}`,
              margin: "10 10",
              height: "40px",
              width: "40px"
            }}
          />
        </IconContainer>
      </SidebarDiv>
    );
  }
}
