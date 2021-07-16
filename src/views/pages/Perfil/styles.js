import { Form } from "@unform/web";
import styled from "styled-components";
import colors from "../../../styles/colors";

export const Container = styled.div`
  background: ${colors.white};
  width: 500px;
  align-self: center;
  margin: 30px 0px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0px 90px 0px;
`;

export const Forms = styled(Form)`
  margin-top: 50px;
`;

export const ContainerProfile = styled.div`
  margin-left: 32px;
  label {
    position: relative;
    background: ${colors.white};
    border-radius: 50%;
    padding: 2px;
    right: 23px;
    bottom: 2px;
    cursor: pointer;
  }
  svg {
    background: ${colors.orange};
    font-size: 20px;
    color: ${colors.white};
    padding: 5px;
    border-radius: 50%;
  }
`;

export const Profile = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
`;
