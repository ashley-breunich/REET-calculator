import React from 'react';
import logo from './realogics-blue.jpg';

const Header = props => {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="Realogics Logo" />
          <h1>
            Real Estate Excise Tax Calculator
          </h1>
        </header>
      </div>
    );
  }

  export default Header;