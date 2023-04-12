import React from 'react';


class App extends React.Component {
  state = {
    numClicks1: 1,
    numClicks2: 1,
    numClicks3: 1,
  }

  handleButtonOne = () => {
    this.setState((oldState, _props) => ({numClicks1: oldState.numClicks1 + 1}));
  }
  
  handleButtonTwo = () => {
    this.setState((oldState, _props) => ({numClicks2: oldState.numClicks2 + 1}));
  }
  
  handleButtonThree = () => {
    this.setState((oldState, _props) => ({numClicks3: oldState.numClicks3 + 1}));
  }
  render() {
    return (
      <div>
        <button onClick={ this.handleButtonOne }>{this.state.numClicks1}</button>
        <button onClick={ this.handleButtonTwo }>{this.state.numClicks2}</button>
        <button onClick={ this.handleButtonThree }>{this.state.numClicks3}</button>
      </div>
    );
  }
}

export default App;