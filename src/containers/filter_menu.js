import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
import CheckList from "../components/filter_check";
import { miscGoods } from "../constants/goods_lists";
import { colors } from "../lib/theme";

export const MenuStyle = {
  backgroundColor: `${colors.lightBeige}`
};

export default class FilterMenu extends React.Component {
  render() {
    return (
      <Menu style={MenuStyle} width={"600px"} right>
        <CheckList title={"Goods Sold"} filterList={miscGoods} />
      </Menu>
    );
  }
}
