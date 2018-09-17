/*​
import React from 'react';

class App extends React.Component
{
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)
​
export default App
*/

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
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
