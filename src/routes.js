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
import ListagemUser from "./views/pages/ListUsers";
import Perfil from "./views/pages/Perfil";

export const PrivateRouteFuncionarios = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...{ rest }}
      render={
        (props) =>
          getToken() != null ? (
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
      title: "Dashboard",
      role: [999, 1],
      icon: RiDashboardLine,
      component: () => <div />,
    },

    {
      path: "/dashboard/users",
      title: "Usuários",
      role: [999],
      icon: RiUserSettingsLine,
      component: () => <ListagemUser />,
    },
    {
      path: "/dashboard/profile",
      title: "Meu perfil",
      role: [999, 1],
      icon: RiProfileFill,
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
