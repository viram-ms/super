import React from 'react';
import './App.css';
import landing from './pages/Landing';
import Category from './pages/Category';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Search from './components/Search';

function App() {
  return (
    <div>
    <Router >
      <div>
      <Switch>
        <Route exact path="/" component={landing} />
        <Route exact path="/category/:id" component={Category} />
        <Route exact path="/search" component={Search} />
      </Switch>
      </div>
      
    </Router>
    </div>
  );
}

export default App;
