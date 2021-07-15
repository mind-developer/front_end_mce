import styled from "styled-components";
import Background from "../../../assets/background.png";
import colors from "../../../styles/colors";
import { Form } from "@unform/web";
import fonts from "../../../styles/fonts";

export const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-image: url(${Background});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 600px;
  width: 450px;
  background: ${colors.white};
  border-radius: 10px;
  padding: 40px 0;
  > div {
    display: flex;
    color: ${colors.blue};
    ${fonts.DMSans400};

    margin: 20px 65px;
    font-weight: 400;
    > a {
      margin-left: 10px;
      color: #000;
    }
  }
  a {
    ${fonts.DMSans700};
    text-decoration: none;
    color: ${colors.lightGray};
    font-weight: bold;
  }
  svg {
    margin: 0px;
    font-size: 25px;
  }
`;

export const Forms = styled(Form)`
  display: flex;
  width: 70%;
  flex-direction: column;
  margin-top: 50px;
  align-self: center;
  span {
    margin-top: 20px;
    font-size: 12px;
    color: ${colors.blue};
    ${fonts.DMSans700};
  }
`;

export const Image = styled.img`
  width: 200px;
`;
