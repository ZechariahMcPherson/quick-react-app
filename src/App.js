import React, { Component } from 'react';
import './App.css';
import Starwars from "./homeComponents/Starwars.component.js";

import Button from "./sharedComponents/Button/Button.component.js";

export default class App extends Component {

  callStarwarsApi()
  {
    return <Starwars />;
  }

  render() {
    return (
      <div className="App">

        <Button text="Call Starwars Api" callback={this.callStarwarsApi.bind(this)} />

      </div>
    );
  }
}
