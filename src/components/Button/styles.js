import styled from "styled-components";
import { shade } from "polished";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const Container = styled.button`
  background-color: ${colors.orange};
  height: 56px;
  padding: 0 16px;
  border-radius: 10px;
  color: #fff;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;
  border: 0;
  cursor: pointer;
  ${fonts[700]};
  &:hover {
    background-color: ${shade(0.1, colors.orange)};
  }
`;
