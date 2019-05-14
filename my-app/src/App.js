import React from 'react';
import './App.css';
import Header from './components/header/header.js';
import Form from './components/form/form.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       currentString: '',
       oldReet: '',
       newReet: '',
    }
  }

  handleInput = event => {
    this.setState({ currentString: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    let homePrice = parseInt(this.state.currentString);
    this.setState({ oldReet: homePrice * .0178 });
    if(homePrice < 500000) {
      this.setState({ newReet: homePrice * .0160 });
    }
    if(homePrice >= 500000 && homePrice <= 1500000 ) {
      this.setState({ newReet: homePrice * .0178 });
    }
    if(homePrice > 1500000 && homePrice <= 3000000 ) {
      this.setState({ newReet: homePrice * .0325 });
    }
    if(homePrice > 3000000 ) {
      this.setState({ newReet: homePrice * .035 });
    }
  }

  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        <Header />
        <Form handleInput={this.handleInput} handleSubmit={this.handleSubmit}/>
      </React.Fragment>
    )
  }
}

export default App;
