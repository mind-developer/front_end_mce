import { lighten } from "polished";
import PerfectScrollbar from "react-perfect-scrollbar";

import styled, { css } from "styled-components";
import colors from "../../../../styles/colors";
import fonts from "../../../../styles/fonts";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-top: 50px;
  justify-content: flex-end;
`;

export const Badge = styled.button`
  background: none;
  border: 0;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  > div {
    margin: 0px 30px;
  }
  button {
    display: flex;
    background-color: transparent;
    flex-direction: column;
    text-align: center;
    strong {
      margin-top: 15px;
      text-align: center;
    }
    span {
      align-self: center;
    }
  }
  ${(props) =>
    props.hasUnread &&
    css`
      &::after {
        position: absolute;
        left: -9px;
        top: -7px;
        width: 20px;
        height: 20px;
        background: #ff892e;
        content: "";
        border-radius: 50%;
      }
    `}
`;

export const NotificationList = styled.div`
  position: relative;
  width: 204px;
  left: 33px;
  top: 38px;
  background: ${colors.white};
  border-radius: 10px;
  padding: 15px 5px;
  display: ${(props) => (props.visible ? "block" : "none")};
  z-index: 1000;
  margin-bottom: 50px;
`;

export const Scroll = styled(PerfectScrollbar)`
  max-height: 260px;
  padding: 5px 15px;
`;

export const Notification = styled.div`
  color: #000;
  ${fonts.Poppins400};
  cursor: pointer;
  & + div {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
  p {
    font-size: 13px;
    line-height: 18px;
  }
  time {
    display: block;
    font-size: 12px;
    opacity: 0.6;
    margin-bottom: 5px;
  }
  button {
    font-size: 12px;
    border: 0;
    background: none;
    color: ${lighten(0.2, "#7159c1")};
  }
  ${(props) =>
    props.unread &&
    css`
      &::after {
        content: "";
        display: inline-block;
        width: 8px;
        height: 8px;
        background: #ff892e;
        border-radius: 50%;
        margin-left: 10px;
      }
    `}
`;

export const ProfileImg = styled.img`
  border-radius: 15px;
  width: 60px;
`;
