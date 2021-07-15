import { Form } from "@unform/web";
import styled from "styled-components";
import colors from "../../../../styles/colors";
import fonts from "../../../../styles/fonts";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
`;

export const ContainerSide = styled.div`
  height: 100vh;
  background-color: #fff;
  width: 250px;
  display: flex;
  flex-direction: column;
  h4 {
    font-size: 12px;
    margin-top: 40px;
    color: ${colors.extraLightGray};
    ${fonts[700]};
    margin-left: 30px;
  }
`;

export const Menu = styled.div`
  margin-top: 10px;
`;

export const Title = styled.h1`
  height: 80px;
  background-color: ${colors.purple};
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 26px;
  ${fonts[700]};
`;
