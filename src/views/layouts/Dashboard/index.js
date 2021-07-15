import React, { useEffect, useState } from "react";
import { routes } from "../../../routes";
import { BsListCheck } from "react-icons/bs";
import { Switch, Route } from "react-router-dom";

import { Container, Content } from "./styles";
import Notifications from "./Notification";

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
        <button>
          <BsListCheck />
        </button>
      </footer>
    </Container>
  );
}

export default Dashboard;
