import styled, { css } from "styled-components";
import colors from "../../../styles/colors";
import fonts from "../../../styles/fonts";

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  header {
    display: flex;
    align-self: center;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    background-color: ${colors.white};
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    padding-top: 30px;

    button {
      border: 0;
      width: 50px;
      height: 50px;
      background: ${colors.gray};
      border-radius: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      color: #000;
      :hover {
        background: ${colors.orange};
        svg {
          color: ${colors.white};
        }
      }
    }
    strong {
      color: #000;
      font-size: 24px;
      margin: 0 15px;
      ${fonts[400]};
    }
  }
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
    grid-gap: 15px;
    list-style: none;
    background: #fff;
    padding-bottom: 50px;
    width: 500px;
    height: auto;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    box-shadow: 0px 17px 8.486px rgba(239, 241, 249, 0.75);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: -13px;

  > div {
    display: flex;
    border-right: 3px dashed #ccc;
    width: 50px;
    font-size: 20px;
    flex-direction: column;
    margin-right: 20px;
    ${fonts.Poppins400};
    color: #ccc;
    &::after {
      position: relative;
      bottom: 24px;
      left: 42px;
      width: 15px;
      height: 15px;
      background: ${colors.white};
      border: 3px solid #ccc;
      content: "";
      border-radius: 50%;
    }
  }
  > span {
    margin-left: 10px;
    padding: 3px 20px;
    height: 90px;
    width: 248px;
  }
`;

export const Time = styled.li`
  display: flex;
  border-radius: 4px;
  flex-direction: column;
  align-self: center;
  margin-left: 10px;
  justify-content: center;
  padding: 5px 20px;
  height: 56px;
  width: 248px;
  border-radius: 0px;
  margin-bottom: 30px;
  color: ${colors.white};
  background: ${colors.orange};
  border-radius: 10px;
  opacity: ${(props) => (props.past ? 0.6 : 1)};
  strong {
    color: ${(props) => (props.available ? "#999" : colors.white)};
    font-size: 20px;
    ${fonts.DMSans700};
  }
  span {
    display: block;
    margin-top: 3px;
    ${fonts.DMSans400};
    font-weight: normal;
    color: ${(props) => (props.available ? "#999" : colors.white)};
  }
`;

export const Footer = styled.footer`
  align-self: flex-end;
`;
