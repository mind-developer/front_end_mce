import React, { useEffect, useState } from "react";
import { routes } from "../../../routes";
import { BsListCheck } from "react-icons/bs";
import { Switch, Route, useHistory } from "react-router-dom";

import { Container, Content } from "./styles";
import Notifications from "./Notification";

function Dashboard({ props }) {
  const history = useHistory();

  return (
    <Container>
      <Notifications />
      <Content>
        <Switch>
          {routes.protected.map((route, index) => (
            <Route
              key={index.toString()}
              path={route.path}
              exact
              component={route.component}
            />
          ))}
        </Switch>
      </Content>
      <footer>
        <button onClick={() => history.push("/dashboard/schedule")}>
          <BsListCheck />
        </button>
      </footer>
    </Container>
  );
}

export default Dashboard;
