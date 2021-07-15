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
  flex-direction: row;
  align-items: center;
  background: #fff;
  width: 700px;
  height: 400px;
  border-radius: 30px;
  padding-right: 60px;
  h1 {
    ${fonts[700]};
    color: ${colors.blue};
    margin-top: 60px;
    text-align: center;
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
`;

export const Image = styled.img`
  width: 300px;
`;

export const Content = styled.div`
  > div {
    display: flex;
    flex-direction: row;
    align-self: center;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;

export const ButtonSecudary = styled.button`
  width: 30%;
  margin: 0px 10px;
  height: 56px;
  border-radius: 10px;
  margin-top: 16px;
  cursor: pointer;
  color: ${colors.purple};
  border: 1px solid ${colors.purple};
  background: transparent;
  :hover {
    background: ${colors.purple};
    color: #fff;
  }
`;
