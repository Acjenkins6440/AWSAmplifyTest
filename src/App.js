import React from 'react';
import logo from './logo.svg';
import './App.css';

function App({builtWith, awsService}) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          I'm a quick app created with {builtWith} and hosted on the AWS service {awsService}
        </p>
      </header>
    </div>
  );
}

export default App;
