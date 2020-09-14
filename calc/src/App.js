import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Calc from "./pages/Home";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Calc />
          </Route>
        </Switch>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
