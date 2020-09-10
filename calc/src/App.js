import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Calc from './pages/Home';

function App() {
  return (
<BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <Calc />
      </Route>
    </Switch>
</BrowserRouter>
  );
}

export default App;
