import React from "react";
import { Route, Redirect } from "react-router-dom";
import {
  RiUserSettingsLine,
  RiProfileFill,
  RiDashboardLine,
} from "react-icons/ri";
import SignIn from "./views/pages/SignIn";
import SignUp from "./views/pages/SignUp";
import { getToken } from "./services/auth";
import Perfil from "./views/pages/Perfil";
import Agenda from "./views/pages/Agenda";

export const PrivateRouteFuncionarios = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...{ rest }}
      render={
        (props) =>
          getToken() == null ? (
            <Component {...{ props }} />
          ) : (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          )
        // eslint-disable-next-line react/jsx-curly-newline
      }
    />
  );
};

export const routes = {
  protected: [
    {
      path: "/dashboard",
      component: () => <Agenda />,
    },

    {
      path: "/dashboard/profile",
      component: () => <Perfil />,
    },
  ],
  public: [
    {
      path: "/",
      component: () => <SignIn />,
    },
    {
      path: "/register",
      component: () => <SignUp />,
    },
  ],
};
