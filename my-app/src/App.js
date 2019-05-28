import React from 'react';
import './App.css';
import Header from './components/header/header.js';
import Form from './components/form/form.js';
import ReetRender from './components/reet/reetrender.js';
import Footer from './components/footer/footer.js';
import If from './components/if/if.js'
// import { Transition } from 'react-transition-group';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       homePrice: 0,
       oldReet: 0,
       newReet: 0,
       currentTrimmedPrice: 0,
    }
  }

  handleInput = event => {
    this.setState({ homePrice: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    let trimmedPrice = parseFloat(this.state.homePrice.replace(/,/g, ''));
    this.setState({ 
      oldReet: trimmedPrice * .0178, 
      currentTrimmedPrice: trimmedPrice
    });
    if(trimmedPrice <= 500000) {
      this.setState({ newReet: trimmedPrice * .0160 });
    }
    if(trimmedPrice > 500000 && trimmedPrice <= 1500000 ) {
      this.setState({ newReet: 8000 + ((trimmedPrice-500000) * .0178) });
    }
    if(trimmedPrice > 1500000 && trimmedPrice <= 3000000 ) {
      this.setState({ newReet: 25800 + ((trimmedPrice-1500000) * .0325) });
    }
    if(trimmedPrice > 3000000 ) {
      this.setState({ newReet: 74550 + ((trimmedPrice-3000000) * .035) });
    }
  }

  onDelete = event => {
    if (event.keyCode === 8) {
      this.setState({ currentTrimmedPrice: 0 })
    }
  }

  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        <Header />
        <Form handleInput={this.handleInput} handleSubmit={this.handleSubmit} onDelete={this.onDelete}/>
        <If condition={this.state.currentTrimmedPrice}>
          <ReetRender homePrice={this.state.homePrice} oldReet={this.state.oldReet} newReet={this.state.newReet}/>
        </If>
        <Footer />
      </React.Fragment>
    )
  }
}

export default App;
