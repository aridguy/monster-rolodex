import { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters: [
        {
          name: 'Ariyo',
          key: '243fgvg'
        },

        {
          name: 'Taiwo',
          key: '243huvg'
        },
        {
          name: 'damilare',
          key: '1234gvh'
        },
        {
          name: 'aliyu',
          key: '243fgvggu'
        }
      ]

    };
  }

  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map((monsters) => {
            return <h1>{monsters.name}</h1>
          })
        }
      </div>
    );
  }

}

export default App;
