import React from "react";
import { Switch, Route, RouteComponentProps, Link } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";

const HatsPage = (props: RouteComponentProps) => {
  console.log(props);
  return (
    <div>
      <Link to="/"> Via Link HomePage</Link>
      <br/>
      <button onClick={() => props.history.push("/")}>Via History</button>
      <h1>HATS PAGE</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;

/**
 * function App() {
  return (
    <div>
      <HomePage />
    </div>
  );
}

 */
