import React, { Component } from 'react'
import './App.css'
import ItemContainer from './comp/ItemContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>So, what you want to do today??</h1>
        </div>
        <div className="supertile">
        <ItemContainer /></div>
      </div>
    );
  }
}

export default App