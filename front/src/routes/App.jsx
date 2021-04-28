import React from "react";
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";

// Pages
import Home from "@Containers/Home";

// Subpages
import TaskSubPage from "@Containers/TaskSubPage";

function AppSwitch() {
  const location = useLocation();
  const isModal = location.state && location.state.modal;

  return (
    <>
      <Switch location={isModal || location}>
        <Route exact path="/" component={Home} />
        <Route exact path="/tasks/:id" component={TaskSubPage} />
        <Route path="/tasks/:id" component={TaskSubPage} />
      </Switch>

      {isModal && <Route path="/tasks/:id" component={TaskSubPage} />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppSwitch />
    </BrowserRouter>
  );
}

export default App;
