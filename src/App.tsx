import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Pokedex from './pages/Pokedex';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/pokedex" component={Pokedex} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
