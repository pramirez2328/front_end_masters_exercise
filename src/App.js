import { StrictMode } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Details from "./Details";
import React from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <>
      <Router>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            backgroundColor: "rgb(228, 225, 225)",
            position: "fixed",
            top: "0",
            width: "100%",
            margin: "0",
          }}
        >
          <Link
            to="/"
            style={{
              textDecoration: "none",
              marginLeft: "2rem",
            }}
          >
            <h1>Home</h1>
          </Link>
          <Link
            to="details/:1"
            style={{
              marginLeft: "2rem",
              textDecoration: "none",
            }}
          >
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
    </>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
