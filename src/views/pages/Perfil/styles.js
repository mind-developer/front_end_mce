import { Form } from "@unform/web";
import styled from "styled-components";
import colors from "../../../styles/colors";

export const Container = styled.div`
  background: ${colors.white};
  width: 500px;
  height: 500px;
  align-self: center;
  margin: 30px 0px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Forms = styled(Form)``;
