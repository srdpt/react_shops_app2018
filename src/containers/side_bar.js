import React from "react";
import { SidebarDiv, IconContainer } from "../styles/containers/side_bar";
import { colors } from "../lib/theme";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ViewListIcon from "@material-ui/icons/ViewList";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import PropTypes from "prop-types";

export default class Sidebar extends React.Component {
  static propTypes = {
    handleFilterClick: PropTypes.func.isRequired,
    handleListClick: PropTypes.func.isRequired,
    handleStatsClick: PropTypes.func.isRequired
  };

  render() {
    const { handleFilterClick, handleListClick, handleStatsClick } = this.props;
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
        <IconContainer onClick={handleListClick}>
          <ViewListIcon
            style={{
              color: `${colors.brown}`,
              margin: "10 10",
              height: "40px",
              width: "40px"
            }}
          />
        </IconContainer>
        <IconContainer onClick={handleStatsClick}>
          <DonutLargeIcon
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
