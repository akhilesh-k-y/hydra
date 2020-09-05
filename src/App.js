import React from 'react';
import logo from './main_logo.png';
import './App.css';
import Nava from './elements/nav'
import Base from './elements/footer'
import Lg from  './elements/login'

function App() {
  return (
    <div className="App">

      <Nava></Nava>
      <div>
        <img src={logo} width="200px" ></img>
        < Base />
      </div>
        <Lg />
      <div>

      </div>
    </div>
  );
}

export default App;
