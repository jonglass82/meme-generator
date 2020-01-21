import React from 'react';
import './App.css';
import Header from './components/Header'
import MemeGenerator from './components/MemeGenerator'
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { AuthContext } from "./context/auth";
import PrivateRoute from './components/PrivateRoute';
import Memepholio from './components/MyMemepholio'

render((
    <Router>
        <App/>
    </Router>
), document.getElementById('root'));

function App() {
  return (
    <div className="App">
    <AuthContext.Provider value={true}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="www.google.com">Gallery</Link>
              </li>
              <li>
                <Link to="www.google.com">Sign-Up</Link>
              </li>
              <li>
                <Link to="www.google.com">Sign-In</Link>
              </li>
              <li>
                <Link to="/components/MyMemepholio">My Memepholio</Link>
              </li>
            </ul>
          </nav>
          <Route exact path="/" component={App.js} />
          <PrivateRoute path="/components/MyMemepholio" component={Memepholio} />
        
        </div>
      </Router>
    </AuthContext.Provider>
      <Header />

      <MemeGenerator/>
     
    </div>
  );
}

export default App;
