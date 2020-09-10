import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Calc from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Calc />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
