import { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters: [
       
      ]

    };
  }

  componentDidMount(){
    fetch('https://spotifystefan-skliarovv1.p.rapidapi.com/addTracksToPlaylist')
    .then((response) => response.json())
    .then((users) => this.setState(() => {
      return{monsters: users}
    },

    () => {
      console.log(this.state)
    }

    ));
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
