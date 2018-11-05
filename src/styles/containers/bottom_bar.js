import React from "react";
import styled from "styled-components";
import { colors, fonts, fontSizes } from "../../lib/theme";

export const AboutText = styled.p`
  color: ${colors.white};
  font-family: ${fonts.arvo}, serif;
  font-size: ${fontSizes.regular};
  padding-right: 20px;
`;

export const BottomNavContainer = styled.div`
  background-color: ${colors.lightBrown};
  display: flex;
  flex-direction: row;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  margin: 0 -999rem;
  padding: 0.1rem 999rem;
`;
