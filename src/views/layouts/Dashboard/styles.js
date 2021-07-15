import styled from "styled-components";
import colors from "../../../styles/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  background-color: ${colors.background};
  min-height: 100vh;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
