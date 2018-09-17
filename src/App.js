import React, { Component } from 'react';
import './App.css';
import StarWars from "./homeComponents/StarWars.Component.js";

import Button from "./sharedComponents/Button/Button.Component.js";

import Header from "./sharedComponents/Header/Header.Component.js";
import Main from "./sharedComponents/Main/Main.Component.js";
import Footer from "./sharedComponents/Footer/Footer.Component.js";


export default class App extends Component {

  callStarwarsApi()
  {
    return <StarWars />;
  }

  render() {


    return (
      <div className="App">
        <h1>Welcome to starwars</h1>
        <Button text="Call Starwars Api" callback={this.callStarwarsApi.bind(this)} />

      </div>
    );
  }
}
