import React, { useEffect, useState } from "react";
import { routes } from "../../../routes";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./SideBar";

import { Container, Content } from "./styles";

function Dashboard({ props }) {
  const [title, setTitle] = useState("");
  const { location } = props;

  useEffect(() => {
    // eslint-disable-next-line array-callback-return
    routes?.protected?.map((route) => {
      if (route?.path == location?.pathname) {
        setTitle(route.title);
      }
    });
  }, [title, location]);

  return (
    <Container>
      <Sidebar ativado={title} />
      <Content>
        <Header name={title} />
        <Switch>
          {routes.protected.map(
            (route, index) =>
              route?.role?.find((elemento) => elemento == 999) && (
                <Route
                  key={index.toString()}
                  path={route.path}
                  exact
                  component={route.component}
                />
              )
          )}
        </Switch>
      </Content>
    </Container>
  );
}

export default Dashboard;
