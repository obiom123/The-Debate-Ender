import React, { Component } from "react";
import "./style.css";

export default class Player extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movieTitle: this.props.title,
      releaseDate: this.props.date,
      moviePic: this.props.pic,
      obiMeter: '',
      searchMovie: '',
    }
  }

  fetchMovieData = async () => {
    const API_KEY = '13f56fa7645fad328dd8b8c35c7a3f48';
    const apiURL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(this.state.searchMovie)}&page=1&include_adult=false`;
    const apiData = await fetch(apiURL);
    const jsonApi = await apiData.json();
    console.log('this is jsonApi', jsonApi)
    this.setState({
      movieTitle: jsonApi.results[0].original_title,
      releaseDate: jsonApi.results[0].release_date,
      moviePic: jsonApi.results[0].poster_path,
      obiMeter: jsonApi.results[0].vote_average,
    })
  }

  handleChange = (event) => {
    this.setState({ searchMovie: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.fetchMovieData();
    this.props.hideScores();
  }

  mainButton = () => {
    this.props.liftData()
  }

  render() {
    const style = {
      width: this.props.showScores ? (this.state.obiMeter * 10).toString() +'%' : 0,
      transition: 'all 3s',
    }

    return (
      <div className='container'>
        <div className='movieContainer'>
          <div className='containerMeter'>
            <div className='insideMeter' style={style}> {this.state.obiMeter  * 10}</div>
          </div>
          <img className='selectedMovie' src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${this.state.moviePic}`} />
          <form className='form form1' onSubmit={this.handleSubmit} >
            <input className='searchBar searchBar1' placeholder='Search Movie Here' type="text" value={this.state.value} onChange={this.handleChange} />
            {/* <input className='button searchButton searchButton1' type="submit" value="Submit" /> */}
            <p>{this.state.movieTitle}<br></br>{this.state.releaseDate}</p>
          </form>
        </div>
      </div>
    )
  }
}

