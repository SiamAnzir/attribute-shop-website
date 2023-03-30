import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import EachProduct from "./components/EachProduct";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage></HomePage>
        </Route>
        <Route path="/product/:name">
          <EachProduct></EachProduct>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
