import React, { Component } from "react";
import "./style.css";

export default class SearchResults extends Component {
  constructor(props) {
    super(props)
    
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ');
    event.preventDefault();
    //If "Movie suggestion is clicked, mark true.   If true switch result from index 0 to 1"
    
  }




  render() {
    

    return (
      <div className='containerforsearch'>
        <div className= 'otherMovies' onClick= {this.props.changeMovie2}>{this.props.movieTitle2}</div>
        <div className= 'otherMovies' onClick= {this.props.changeMovie3}>{this.props.movieTitle3}</div>
      </div>
    )
  }
}