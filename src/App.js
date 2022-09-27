import { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters: []

    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((monster) => this.setState(() => {
        return { monsters: monster }
      },

        () => {
          console.log(this.state)
        }

      ));
  }

  render() {
    return (
      <div className="App">
        <input
          placeholder='monster search'
          type="search"
          className="search-box"
          onChange={(event) => {
            console.log(event.target.value);
            const searchString = event.tartget.value.toLocaleLowerCase();
            const filterMonsters = this.state.monsters.filter((monster) => {
              return monster.name.toLocaleLowerCase().includes(searchString);
            });
            this.setState(() => {
              return { monsters: filterMonsters }
            })
          }}



        />
        {this.state.monsters.map((monsters) => {
          return <h1>{monsters.name}</h1>
        })
        }


      </div>
    );
  }

}

export default App;
