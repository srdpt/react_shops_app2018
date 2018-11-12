import React from "react";
import { SidebarDiv, IconContainer } from "../styles/containers/side_bar";
import { colors } from "../lib/theme";
import FilterListIcon from "@material-ui/icons/FilterList";
import ListIcon from "@material-ui/icons/List";
import ShowChartIcon from "@material-ui/icons/ShowChart";
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
          <FilterListIcon
            style={{
              color: `${colors.brown}`,
              margin: "10 10",
              height: "40px",
              width: "40px"
            }}
          />
        </IconContainer>
        <IconContainer onClick={handleListClick}>
          <ListIcon
            style={{
              color: `${colors.brown}`,
              margin: "10 10",
              height: "40px",
              width: "40px"
            }}
          />
        </IconContainer>
        <IconContainer onClick={handleStatsClick}>
          <ShowChartIcon
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
