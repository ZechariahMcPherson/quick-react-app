import React, { Component } from 'react';



class StarWars extends Component {

  constructor(props)
  {
    super(props);


  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello world</h1>
        </header>

      </div>
    );
  }
}

export default App;
