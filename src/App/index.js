import React, { Component } from "react";
import "./style.css";
import Player from '../Player';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showScores: false
    }
  }

  hideScores = () => {
    this.setState({
      showScores: false
    })
  }
  
  squashTheDebate = () => {
    this.setState({
      showScores: true
    })

  }

  render() {
    return (
      <div className='appContainer'>
        <div className='overlay'>
          <div className='playerContainer'>
            <div>
              <Player  title='Home Alone' date='1990-11-09' pic='/5Lo3sWuvbO4AnrAHYBgB5U1Opqd.jpg' showScores={this.state.showScores} hideScores={this.hideScores}/>
            </div>
            <button onClick={() => this.squashTheDebate()} className='squashButton'>Squash The Debate</button>
            <div>
              <Player title='The Notebook' date='2004-06-25' pic='/gMfstesBXKdsHToAUXVPHujUDfb.jpg' showScores={this.state.showScores} hideScores={this.hideScores}/>
            </div>
            {this.state.betterMovie ? <div>{this.state.betterMovie} is the better movie!</div> : null}
            
          </div>
        </div>
      </div>
    )
  }
}

export default App;
