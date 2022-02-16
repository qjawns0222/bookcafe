import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Sign from "./pages/Sign";
import NotFound from "./pages/NotFound";
import Edit from "./pages/Edit";
import { ErrorBoundary } from "react-error-boundary";
import Error from "./pages/Error";
import { ConnectedRouter } from "connected-react-router";
import history from "./history";

function App() {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Sign" component={Sign} />
          <Route exact path="/Detail:id" component={Detail} />
          <Route exact path="/Add" component={Add} />
          <Route exact path="/Edit:id" component={Edit} />
          <Route exact component={NotFound} />
        </Switch>
      </ConnectedRouter>
    </ErrorBoundary>
  );
}
export default App;
