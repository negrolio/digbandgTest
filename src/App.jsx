import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import CreditSimulator from './components/credit-simulator';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <CreditSimulator />;
  }
}

export default hot(module)(App);
