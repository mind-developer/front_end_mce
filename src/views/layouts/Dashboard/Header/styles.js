import styled from "styled-components";
import colors from "../../../../styles/colors";
import fonts from "../../../../styles/fonts";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  width: 100%;
  height: 60px;
  button {
    background: transparent;
    cursor: pointer;
    margin-right: 20px;
    :hover {
      color: ${colors.purple};
    }
  }
`;

export const NamePage = styled.div`
  background: rgb(127, 99, 244, 0.2);
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  b {
    margin-left: 20px;
    ${fonts[700]};
    color: ${colors.purple};
  }
`;

export const Buscar = styled.div`
  display: flex;
  background-color: #f3f3f3;
  height: 40px;
  margin-left: 20px;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
  border-radius: 5px;
  input {
    background-color: transparent;
    height: 40px;
    outline: none;
  }
  svg {
    color: #aaaaaa;
    :hover {
      color: #000;
    }
  }
`;
