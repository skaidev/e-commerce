import React from "react";
import "bootstrap/dist/js/bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/index";
import HeaderComp from "./components/HeaderComp";
import FooterComp from "./components/FooterComp";
import "@fortawesome/fontawesome-free/css/all.css";
import "./styles/style.scss";
import "./styles/index.scss";

const App = () => {
  return (
    <div>
      <HeaderComp />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <FooterComp />
    </div>
  );
};

export default App;
