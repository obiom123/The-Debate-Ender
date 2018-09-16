import React, { Component } from "react";
import "./style.css";

export default class SearchResults extends Component {
  constructor(props) {
    super(props)
    
  }


  render() {
    

    return (
      <div className='containerforsearch'>
        <div className= 'otherMovies'>{this.props.title2}</div>
        <div className= 'otherMovies'>{this.props.title3}</div>
      </div>
    )
  }
}