import React, { Component } from 'react';
import './App.css';

import Header from "./sharedComponents/Header/Header.Component.js";
import Main from "./sharedComponents/Main/Main.Component.js";
import Footer from "./sharedComponents/Footer/Footer.Component.js";


export default class App extends Component {

  render() {

    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}
