import React, { Component } from "react";
import "./style.css";
import FirstPlayer from '../FirstPlayer';
import SecondPlayer from '../SecondPlayer';


class App extends Component {
constructor(props){
  super(props)
 
}



  render() {
    return ( 
    <div className='appContainer'>
    <div className='playerContainer'>
    <div>
    <FirstPlayer />
    </div>
    <div>
    <SecondPlayer />
   </div>
   </div>

 
    </div>
    
  )
  }
}

export default App;
