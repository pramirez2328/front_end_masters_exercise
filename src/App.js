import { StrictMode } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Details from "./Details";
import React from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <Router>
        <div id="nav_links">
          <Link to="/">
            <h1>Home</h1>
          </Link>
          <Link to="details/:1">
            <h1>History</h1>
          </Link>
        </div>

        <Switch>
          <Route path="/details/:1">
            <Details />
          </Route>
          <Route path="/">
            <SearchParams />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
