import React from "react";
import styled from "styled-components";
import { colors, fonts, fontSizes } from "../../lib/theme";

export const expansionStyles = {
  backgroundColor: `${colors.lightBeige}`
};

export const titleExpansion = {
  color: `${colors.brown}`,
  fontFamily: `${fonts.lato}, sans-serif`,
  fontSize: `${fontSizes.large}`
};

export const unselected = {
  color: `${colors.darkBrown}`,
  fontFamily: `${fonts.lato}, sans-serif`,
  width: "250px",
  marginLeft: "25px",
  backgroundColor: `${colors.lightBeige}`
};

export const selected = {
  color: `${colors.darkBrown}`,
  fontFamily: `${fonts.lato}, sans-serif`,
  width: "250px",
  marginLeft: "25px",
  backgroundColor: `${colors.lightBrown}`
};

export const tagStyle = {
  control: styles => ({
    ...styles,
    backgroundColor: `${colors.lightBeige}`,
    width: "275px"
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      color: `${colors.darkBrown}`,
      cursor: isDisabled ? "not-allowed" : "default",
      fontFamily: `${fonts.lato}, sans-serif`,
      width: "275px"
    };
  },
  multiValue: (styles, { data }) => {
    return {
      ...styles,
      backgroundColor: `${colors.lightBrown}`,
      color: `${colors.darkBrown}`
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: `${colors.lightBeige}`
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: `${colors.darkBrown}`
  })
};

export const yearSelect = {
  control: styles => ({
    ...styles,
    backgroundColor: `${colors.lightBeige}`,
    width: "100px"
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      color: `${colors.darkBrown}`,
      cursor: isDisabled ? "not-allowed" : "default",
      fontFamily: `${fonts.lato}, sans-serif`,
      width: "100px"
    };
  }
};

export const GroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`;

export const TagContainer = styled.div`
  display: block;
  padding-left: 15px;
  padding-bottom: 15px;
  margin-left: 30px;
`;

export const YearContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 15px;
  margin-left: 30px;
`;

export const YearText = styled.p`
  color: ${colors.darkBrown};
  font-family: ${fonts.lato}, sans-serif;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
`;
