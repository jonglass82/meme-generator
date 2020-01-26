import React from 'react';
import './App.css';
import Header from './components/Header'
import MemeGenerator from './components/MemeGenerator'
import NavTab from './components/NavTabs'



function App() {
  return (
    <div className="App">

      <NavTab />

      <Header />

      <MemeGenerator/>
     
    </div>
  );
}

export default App;
