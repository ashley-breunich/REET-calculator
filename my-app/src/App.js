import React from 'react';
import './App.css';
import Header from './components/header/header.js';
import Form from './components/form/form.js';
import ReetRender from './components/reet/reetrender.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       homePrice: '',
       oldReet: '',
       newReet: '',
    }
  }

  handleInput = event => {
    this.setState({ homePrice: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    let trimmedPrice = parseFloat(this.state.homePrice.replace(/,/g, ''));
    this.setState({ oldReet: trimmedPrice * .0178 });
    if(trimmedPrice < 500000) {
      this.setState({ newReet: trimmedPrice * .0160 });
    }
    if(trimmedPrice >= 500000 && trimmedPrice <= 1500000 ) {
      this.setState({ newReet: trimmedPrice * .0178 });
    }
    if(trimmedPrice > 1500000 && trimmedPrice <= 3000000 ) {
      this.setState({ newReet: trimmedPrice * .0325 });
    }
    if(trimmedPrice > 3000000 ) {
      this.setState({ newReet: trimmedPrice * .035 });
    }
  }

  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        <Header />
        <Form handleInput={this.handleInput} handleSubmit={this.handleSubmit}/>
        <ReetRender oldReet={this.state.oldReet} newReet={this.state.newReet}/>
      </React.Fragment>
    )
  }
}

export default App;
