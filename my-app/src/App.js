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
    let homePrice = parseInt(this.state.homePrice);
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
        <ReetRender oldReet={this.state.oldReet} newReet={this.state.newReet}/>
      </React.Fragment>
    )
  }
}

export default App;
