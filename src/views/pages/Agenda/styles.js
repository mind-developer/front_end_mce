import { shade } from "polished";
import styled from "styled-components";
import colors from "../../../styles/colors";
import fonts from "../../../styles/fonts";

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-self: center;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    background-color: #fff;
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
        background: #fea051;
        svg {
          color: #fff;
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
      background: #fff;
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
  align-self: flex-start;
  align-items: center;
  margin-left: 10px;
  padding: 3px 20px;
  height: 56px;
  width: 248px;
  border-radius: 0px;
  margin-bottom: 30px;
  color: #fff;
  border-radius: 10px;
  opacity: ${(props) => (props.past ? 0.6 : 1)};
  strong {
    color: ${(props) => (props.available ? "#999" : "#fff")};
    font-size: 20px;
    ${fonts[400]};
  }
  span {
    display: block;
    margin-top: 3px;
    ${fonts[400]};
    font-weight: normal;
    color: ${(props) => (props.available ? "#999" : "#fff")};
  }
`;

export const ButtonSecundary = styled.button`
  background: transparent;
  margin: 25px 0px 10px 20px;
  border: 1px solid #fea051;
  box-sizing: border-box;
  border-radius: 10px;
  height: 56px;
  cursor: pointer;
  width: 200px;
  ${fonts[700]};
  color: #fea051;
  &:hover {
    background-color: ${colors.orange};
    color: #fff;
  }
`;
