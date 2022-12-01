import React, { Component } from 'react'
import './App.css'

export class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: []

    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(() => {
        return {monsters: users}
      }))
  }






  render() {
    return (
      <div className='App'>
        {
          this.state.monsters.map((monsters) => {
            return <h1 >{monsters.id}, {monsters.name}</h1>
          })
        }
      </div>
    )
  }
}

export default App
