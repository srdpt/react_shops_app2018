import React from "react";
import styled from "styled-components";
import { colors, fonts, fontSizes } from "../../lib/theme";

export const AboutText = styled.p`
  color: ${colors.lightBeige};
  font-family: ${fonts.arvo}, serif;
  font-size: ${fontSizes.regular};
  padding-right: 15px;
`;

export const BottomNavContainer = styled.div`
  background-color: ${colors.lightBrown};
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 44px;
  margin: 0 -999rem;
  padding: 0.25rem 999rem;
`;
