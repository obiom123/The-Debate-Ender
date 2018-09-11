import React, { Component } from "react";
import "./style.css";
import FirstPlayer from '../FirstPlayer';
import SecondPlayer from '../SecondPlayer';


class App extends Component {
constructor(props){
  super(props)


  
 
}
liftData =(data)=>{
  this.setState({data:data});
}
squashTheDebate = ()=>{
console.log('this.squashTheDebate')
  }


  render() {
    return ( 
    <div className='appContainer'>
    <div className='overlay'>
    <div className='playerContainer'>
    <div>
    <FirstPlayer liftData = {this.liftData} />
    </div>
    <button onClick= {()=>this.squashTheDebate()} className= 'squashButton'>Squash The Debate</button>
    <div>
    <SecondPlayer />
   </div>
   </div>
</div>
 
    </div>
    
  )
  }
}

export default App;
