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

    this.addStarWarsComponent = this.addStarWarsComponent.bind(this);
  }

  addStarWarsComponent(shouldShowBool)
  {
    console.log('called addStarWarsComponent');

    this.setState({showStarWars: shouldShowBool});
  }

  render() {
    return (
      <div className="main-wrapper">
        <Button text="Call Starwars Api" callback={this.addStarWarsComponent} />
        {this.state.showStarWars ?  <StarWars /> : null}

      </div>
    );
  }
}

Main.propTypes =
{
  showStarWars: PropTypes.bool,
  key: PropTypes.number
};


export default Main;
