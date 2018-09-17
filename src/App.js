import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Button from "./sharedComponents/Button.component.js";
import Starwars from "./homeComponents/Starwars.component.js";


class App extends Component {

  constructor()
  {
    this.state({
    });

    this.addStarwarsComponent = this.addStarwarsComponent.bind(this);

  }

  this.addStarwarsComponent()
  {
    return(
      <Starwars />
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello world</h1>
        </header>

        <Button callback={this.addStarwarsComponent} />


      </div>
    );
  }
}

export default App;
