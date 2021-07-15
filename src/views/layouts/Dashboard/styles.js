import styled from "styled-components";
import colors from "../../../styles/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  justify-content: space-between;
  background-color: ${colors.background};
  min-height: 100vh;
  height: 100%;

  footer {
    align-self: flex-end;
    button {
      background: ${colors.orange};
      width: 60px;
      height: 60px;
      border-radius: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    svg {
      font-size: 25px;
      color: ${colors.white};

      :hover {
        font-size: 30px;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
