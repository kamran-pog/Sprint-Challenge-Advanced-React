import React, { Component } from 'react'
import axios from "axios"
import PlayerCards from './components/PlayerCards'
import DarkModeButton from './components/DarkModeButton';


export default class App extends Component {
  constructor() {
  super();
  this.state = {
    players: []
  }
}


 componentDidMount(){
   axios.get(`http://localhost:5000/api/players`)
   .then(response => {
     console.log(response.data)
     this.setState({
       players: response.data
     })
   })
   .catch(error => {
     console.log('whooops',error)
   })
 }
  
  render() {
    return (
      <div className="App">
      <DarkModeButton />
      <h1 data-testid='header'>Women's Soccer Players</h1>
      <PlayerCards players={this.state.players}/>
    </div>
    )
  }
}
