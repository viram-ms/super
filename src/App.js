import React from 'react';
import './App.css';
import landing from './pages/Landing';
import Category from './pages/Category';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
    <Router >
      <div>
      <Switch>
        <Route exact path="/" component={landing} />
        <Route exact path="/category/:id" component={Category} />
      </Switch>
      </div>
      
    </Router>
    </div>
  );
}

export default App;
