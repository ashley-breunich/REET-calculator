import React from 'react';
import './App.css';
import Header from './components/header/header.js';
import Form from './components/form/form.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       currentString: '',
    }
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Form />
      </React.Fragment>
    )
  }
}

export default App;
