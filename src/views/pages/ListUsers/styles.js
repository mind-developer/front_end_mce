import styled from "styled-components";
import colors from "../../../styles/colors";
import fonts from "../../../styles/fonts";

export const Container = styled.table`
  align-self: center;
  width: 95%;
  border-spacing: 0px 10px;
  ${fonts[700]};
  color: ${colors.DarKGray};
  text-align: center;
  > tr {
    background: transparent;
  }
`;

export const Content = styled.tr`
  background: #fff !important;
  border-radius: 10px;
  box-shadow: 0px 3px 5px 1px rgb(0 0 0 / 7%), 0px 5px 8px 0px rgb(0 0 0 / 0%),
    0px 1px 0px 0px rgb(0 0 0 / 12%);
  > td {
    padding: 20px 0px;
  }
  button {
    background: transparent;
    margin-left: 20px;
    cursor: pointer;
    svg {
      color: ${colors.darKGray};
      :hover {
        color: ${colors.purple};
      }
    }
  }
`;
