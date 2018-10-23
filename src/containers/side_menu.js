import React from "react";
import Sidebar from "./side_bar";
import { slide as Menu } from "react-burger-menu";
import CheckList from "../components/filter_check";
import { colors } from "../lib/theme";
import { econCode, ethnicity, corp, twoAns } from "../constants/filter_lists";

const styles = {
  bmMenu: {
    background: `${colors.lightBeige}`
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)"
  }
};

export default class SideMenu extends React.Component {
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
          styles={styles}
        >
          <CheckList
            title={"Economic Code"}
            filterList={econCode}
            multiOptions={true}
          />
          <CheckList
            title={"Goods Sold"}
            filterList={["todo"]}
            multiOptions={false}
          />
          <CheckList
            title={"Ethnicity"}
            filterList={ethnicity}
            multiOptions={true}
          />
          <CheckList
            title={"Ownership"}
            filterList={corp}
            multiOptions={false}
          />
          <CheckList
            title={"Plateatici"}
            filterList={twoAns}
            multiOptions={false}
          />
          <CheckList
            title={"Filter By Year"}
            filterList={["todo"]}
            multiOptions={false}
          />
        </Menu>
      </div>
    );
  }
}
