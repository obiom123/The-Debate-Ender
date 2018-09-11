import React, { Component } from "react";
import "./style.css";
import FirstPlayer from '../FirstPlayer';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showScores: false
    }
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
              <FirstPlayer  title='Home Alone' date='1990-11-09' pic='/5Lo3sWuvbO4AnrAHYBgB5U1Opqd.jpg' showScores={this.state.showScores}/>
            </div>
            <button onClick={() => this.squashTheDebate()} className='squashButton'>Squash The Debate</button>
            <div>
              <FirstPlayer title='The Notebook' date='2004-06-25' pic='/gMfstesBXKdsHToAUXVPHujUDfb.jpg' showScores={this.state.showScores}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
