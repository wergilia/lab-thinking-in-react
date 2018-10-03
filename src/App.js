import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FilterableProductTable from './FilterableProductTable/FilterableProductTable';

import data from './data.json'

class App extends Component {
  constructor(){
    super();
    this.state = {
      data: data
    }
}
  

  render() {
    return (
      <div>
        <FilterableProductTable categories={this.state.data}/>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>

      </div>
    );
  }
}

export default App;