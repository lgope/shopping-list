import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar.component';
import ShoppingList from './components/ShoppingList.component';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <AppNavbar />
        <ShoppingList />
      </div>
    );
  }
}

export default App;
