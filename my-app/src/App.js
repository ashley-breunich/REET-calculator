import React from 'react';
import './App.css';
import Header from './components/header/header.js';
import Form from './components/form/form.js';
import ReetRender from './components/reet/reetrender.js';
import Footer from './components/footer/footer.js';
import If from './components/if/if.js'

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
    if(trimmedPrice <= 500000) {
      this.setState({ newReet: trimmedPrice * .0160 });
    }
    // Anything up to $500,000 will be taxed at 1.6%; anthing from $500,001 --> $1.5M will be taxed at 1.78%
    if(trimmedPrice > 500000 && trimmedPrice <= 1500000 ) {
      this.setState({ newReet: (500000 * .0160) + ((trimmedPrice-500000) * .0178) });
    }
    // Anything up to $500,000 will be taxed at 1.6%; anthing from $500,001 --> $1.5M will be taxed at 1.78%; anything from $1,500,001 --> 3M will be taxed at 3.25%
    if(trimmedPrice > 1500000 && trimmedPrice <= 3000000 ) {
      this.setState({ newReet: (500000 * .0160) + (1000000 * .0178) + ((trimmedPrice-1500000) * .0325) });
    }
     // Anything up to $500,000 will be taxed at 1.6%; anthing from $500,001 --> $1.5M will be taxed at 1.78%; anything from $1,500,001 --> 3M will be taxed at 3.25%; anything above 3,000,001 will be taxed at 3.5%
    if(trimmedPrice > 3000000 ) {
      this.setState({ newReet: (500000 * .0160) + (1000000 * .0178) + (1500000 * .0325) + ((trimmedPrice-3000000) * .035) });
    }
  }

  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        <Header />
        <Form handleInput={this.handleInput} handleSubmit={this.handleSubmit}/>
        <If condition={this.state.newReet}>
          <ReetRender homePrice={this.state.homePrice} oldReet={this.state.oldReet} newReet={this.state.newReet}/>
        </If>
        <Footer />
      </React.Fragment>
    )
  }
}

export default App;
