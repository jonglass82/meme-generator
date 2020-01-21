import React from 'react';
import './App.css';
import Header from './components/Header'
import MemeGenerator from './components/MemeGenerator'
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

render((
    <Router>
        <App/>
    </Router>
), document.getElementById('root'));

function App() {
  return (
    <div className="App">
 <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="www.google.com">About</Link>
            </li>
            <li>
              <Link to="www.google.com">Users</Link>
            </li>
          </ul>
        </nav>
      </div>
    </Router>
      <Header />

      <MemeGenerator/>
     
    </div>
  );
}

export default App;
