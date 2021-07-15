import { Form } from "@unform/web";
import styled from "styled-components";
import colors from "../../../../styles/colors";
import fonts from "../../../../styles/fonts";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgb(248, 250, 251, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  width: 500px;
  height: 700px;
  border-radius: 30px;
  padding-bottom: 50px;
  h1 {
    ${fonts[700]};
    color: ${colors.blue};
    margin-top: 60px;
  }

  a {
    text-decoration: none;
    margin-top: 20px;
    ${fonts[700]};
    color: ${colors.blue};
    font-weight: normal;
    :hover {
      color: ${colors.purple};
    }
  }
  overflow: auto;
  -ms-overflow-style: none;
  ::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 30px !important;
    margin-right: 70px !important;
  }
  ::-webkit-scrollbar {
    width: 8px;
    background: transparent;
    border-radius: 30px !important;
    margin-right: 30px;
  }
  ::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 30px !important;
    margin-right: 30px !important;
  }
`;

export const Forms = styled(Form)`
  display: flex;
  width: 70%;
  flex-direction: column;
  align-self: center;
  span {
    margin-top: 20px;
    font-size: 12px;
    color: ${colors.blue};
    ${fonts[400]};
  }
`;
