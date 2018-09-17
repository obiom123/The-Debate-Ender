import React, { Component } from "react";
import "./style.css";
import SearchResults from './SearchResults';


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
      movieTitle2: jsonApi.results[1].original_title,
      releaseDate2: jsonApi.results[1].release_date,
      moviePic2: jsonApi.results[1].poster_path,
      obiMeter2: jsonApi.results[1].vote_average,
      movieTitle3: jsonApi.results[2].original_title,
      releaseDate3: jsonApi.results[2].release_date,
      moviePic3: jsonApi.results[2].poster_path,
      obiMeter3: jsonApi.results[2].vote_average,
      movieSuggestion: false
    })
  }

  handleChange = (event) => {
    this.setState({ searchMovie: event.target.value });
    //fetch this.state.searchMovies
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.fetchMovieData();
    this.props.hideScores();
  }

  mainButton = () => {
    this.props.liftData()
  }

  changeMovie2 = () => {
    this.setState({
      moviePic: this.state.moviePic2,
      moviePic2: this.state.moviePic,
      releaseDate: this.state.releaseDate2,
      releaseDate2: this.state.releaseDate,
      obiMeter: this.state.obiMeter2,
      obiMeter2: this.state.obiMeter,
      movieTitle2: this.state.movieTitle,
      movieTitle: this.state.movieTitle2

    })
    
  }

  changeMovie3 = () => {
    this.setState({
      moviePic: this.state.moviePic3,
      moviePic3: this.state.moviePic,
      releaseDate: this.state.releaseDate3,
      releaseDate3: this.state.releaseDate,
      obiMeter: this.state.obiMeter3,
      obiMeter3: this.state.obiMeter,
      movieTitle3: this.state.movieTitle,
      movieTitle: this.state.movieTitle3

    })
    
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
            <p className='movieDescription'>{this.state.movieTitle}, {this.state.releaseDate} <br></br>
            <SearchResults movieTitle2={this.state.movieTitle2} movieTitle3={this.state.movieTitle3} changeMovie2={this.changeMovie2} changeMovie3={this.changeMovie3}/></p>
          </form>
        </div>
      </div>
    )
  }
}

