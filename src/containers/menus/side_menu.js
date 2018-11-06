import React from "react";
import Sidebar from "../side_bar";
import { slide as Menu } from "react-burger-menu";
import "bootstrap/dist/css/bootstrap.min.css";
import FilterMenu from "./filter_menu";
import ListMenu from "./list_menu";
import StatsMenu from "./stats_menu";
import PropTypes from "prop-types";
import { colors } from "../../lib/theme";
import PointMenu from "./point_menu";

const burgerStyle = {
  bmMenu: {
    background: `${colors.lightBeige}`,
    paddingTop: "20px"
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)"
  },
  bmItemList: {
    overflowY: "scroll"
  }
};

export default class SideMenu extends React.Component {
  state = {
    filterMenu: false,
    listMenu: false,
    statsMenu: false,
    pointMenu: false,
    selStore: {}
  };

  static propTypes = {
    currStores: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string.isRequired,
        lat: PropTypes.number.isRequired,
        lon: PropTypes.number.isRequired,
        yearOpened: PropTypes.number.isRequired,
        sestiere: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
        nace: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isCorporate: PropTypes.string.isRequired,
        ethnicity: PropTypes.string.isRequired,
        collected: PropTypes.number.isRequired
      })
    ).isRequired
  };

  clickedFilter = () => {
    this.setState({
      filterMenu: !this.state.filterMenu,
      listMenu: false,
      statsMenu: false,
      pointMenu: false
    });
  };

  clickedList = () => {
    this.setState({
      listMenu: !this.state.listMenu,
      filterMenu: false,
      statsMenu: false,
      pointMenu: false
    });
  };

  clickedStats = () => {
    this.setState({
      statsMenu: !this.state.statsMenu,
      filterMenu: false,
      listMenu: false,
      pointMenu: false
    });
  };

  clickedPoint = isOpen => {
    this.setState({
      statsMenu: false,
      filterMenu: false,
      listMenu: false,
      pointMenu: isOpen
    });
  };

  handleStore = currStore => {
    this.setState({ selStore: currStore });
  };

  render() {
    const { filterMenu, listMenu, statsMenu, selStore, pointMenu } = this.state;
    return (
      <div>
        <Sidebar
          handleFilterClick={this.clickedFilter}
          handleListClick={this.clickedList}
          handleStatsClick={this.clickedStats}
        />
        <Menu
          width={"400px"}
          customBurgerIcon={false}
          isOpen={pointMenu}
          styles={burgerStyle}
        >
          <PointMenu store={selStore} />
        </Menu>
        <Menu
          width={"400px"}
          right
          customBurgerIcon={false}
          isOpen={filterMenu}
          styles={burgerStyle}
        >
          <FilterMenu />
        </Menu>
        <Menu
          width={"400px"}
          right
          customBurgerIcon={false}
          isOpen={listMenu}
          styles={burgerStyle}
        >
          <ListMenu
            stores={this.props.currStores}
            onPointClick={this.clickedPoint}
            selectedStore={this.handleStore}
          />
        </Menu>
        <Menu
          width={"400px"}
          right
          customBurgerIcon={false}
          isOpen={statsMenu}
          styles={burgerStyle}
        >
          <StatsMenu />
        </Menu>
      </div>
    );
  }
}
