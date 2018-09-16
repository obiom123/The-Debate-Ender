import React, { Component } from "react";
import "./style.css";

export default class SearchResults extends Component {
  constructor(props) {
    super(props)
    
  }


  render() {
    

    return (
      <div className='containerforsearch'>
        <div className= 'otherMovies'>Movie Search 1</div>
        <div className= 'otherMovies'>Movie Search 2</div>
      </div>
    )
  }
}