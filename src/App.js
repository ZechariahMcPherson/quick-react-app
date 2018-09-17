import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//import Button from "./sharedComponents/Button.component.js";
//import Starwars from "./homeComponents/Starwars.component.js";



//class App extends Component {
  /*
  constructor()
  {
    this.state({
      showStarwarsText: false
    });

    //this.addStarwarsComponent = this.addStarwarsComponent.bind(this);

  }
  */
  /*
  addStarwarsComponent()
  {
    //return React.createElement(Starwars);

    this.setState({showStarwarsText: true});
  }
  */

  /*
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello world</h1>
        </header>

        <Button callback={this.addStarwarsComponent} />

        {this.state.showStarwarsText ? null : <Starwars />}
      </div>
    );
  }
}

*/

class App extends Component {
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
