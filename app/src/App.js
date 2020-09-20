import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import HomePage from './views/HomePage';
import GraphPage from './views/GraphPage';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/graph" component={GraphPage}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
