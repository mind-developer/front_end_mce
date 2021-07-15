import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/UserContext";

import { routes, PrivateRouteFuncionarios } from "./routes";
import Dashboard from "./views/layouts/Dashboard";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Switch>
            {routes?.public?.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact
                component={route.component}
              />
            ))}
            <PrivateRouteFuncionarios path="/dashboard" component={Dashboard} />
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
