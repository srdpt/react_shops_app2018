import React from "react";
import styled from "styled-components";
import { colors, fonts, fontSizes } from "../../lib/theme";

export const ArrowIcon = styled.img`
  padding-top: 15px;
  height: 40px;
  width: 40px;
`;

export const BoxTitle = styled.p`
  font-family: ${fonts.lato}, sans-serif;
  font-size: ${fontSizes.large};
  color: ${colors.brown};
  margin-right: 30px;
  margin-left: 20px;
`;
