import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <h3 className="App-title">Goood Good Study,Day Day Up</h3>
        </header>
        <p className="App-intro">
          <li><Link to="/lesson1">1.Jsx和render()</Link></li>
          <li><Link to="/lesson2">2.组件的组合、嵌套和组件树</Link></li>
          <li><Link to="/lesson3">3.事件监听</Link></li>
          <li><Link to="/lesson4">4.组件的state和setState</Link></li>
        </p>
      </div>
    );
  }
}

export default App;
