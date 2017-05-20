import React, { Component } from 'react';
import logo from './logo.svg';
import Lists from './components/List';
import './App.css';


class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
        lists: []
      };
    }

  componentDidMount() {
    fetch('http://localhost:5000/api/lists')
    .then(function(response) {
      return response.json()
    }).then((json) => {
      this.setState({
          lists: json
        });
      }).catch(function(ex) {
        'Fail'
      })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h2> Current list of tasks </h2>
        <Lists lists={ this.state.lists }/>
      </div>
    );
  }
}

export default App;
