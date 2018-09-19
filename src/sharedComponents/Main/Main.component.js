import React, { Component } from 'react';
import PropTypes from 'prop-types';


import "./Main.Component.css";

import Button from "./../Button/Button.Component.js";
import StarWars from "./../../homeComponents/StarWars/StarWars.Component.js";


/*
  todo change to react router
*/

class Main extends Component {

  constructor(props)
  {
    super(props);

    this.state = ({
      showStarWars: false,
      key: Math.random
    });

    //this.addStarWarsFunc = this.addStarWarsComponent.bind(this);
  }

  addStarWarsComponent(value)
  {
    console.log('called addStarWarsComponent');

    this.setState({showStarWars: value})
  }

  render() {
    return (
      <div className="main-wrapper">
        <Button text="Call Starwars Api" callback={this.addStarWarsComponent.bind(this)} />
        {this.state.showStarWars ?  <StarWars /> : null}

      </div>
    );
  }
}

Main.propTypes =
{
  key: PropTypes.number
};


export default Main;
