import React, { Component } from "react";
import "./style.css";

export default class FirstPlayer extends Component {
  constructor(props) {
    super(props)
    this.state = {

      movieTitle: 'Home Alone',
      releaseDate: '1990-11-09',
      moviePic: '/5Lo3sWuvbO4AnrAHYBgB5U1Opqd.jpg',
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
    // console.log('this is jsonApi.results[0]', this.state.moviePic)
    this.setState({
      movieTitle: jsonApi.results[0].original_title,
      releaseDate: jsonApi.results[0].release_date,
      moviePic: jsonApi.results[0].poster_path,
      obiMeter: jsonApi.results[0].vote_average,
    }, ()=> this.move())
    // console.log('this is jsonApi.results[0]', this.state.obiMeter)
  }



  handleChange = (event) => {
    this.setState({ searchMovie: event.target.value });
  }

  handleSubmit = (event) => {

    console.log('Person 1 has selected this movie ' + encodeURIComponent(this.state.searchMovie));
    event.preventDefault();
    this.fetchMovieData();
    // console.log('pic you need ' + this.moviePic)
   
  }

mainButton = () =>{
  this.props.liftData()
  
}



   move = ()=> {
    var elem = document.querySelector(".insideMeter");   
    var width = 1;
    var id = setInterval(() => {
      if (width >= this.state.obiMeter*10) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
      }
      
    }, 100);
    console.log(this.state.obiMeter)

  }
  


  render() {
    return (
      <div className='container'>

      

        <div className='movieContainer'>

         <div className='containerMeter'>
      <div className='insideMeter'></div>
      </div>

          <img className='selectedMovie' src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${this.state.moviePic}`} />
          <form className='form form1' onSubmit={this.handleSubmit} >
            <input className='searchBar searchBar1' placeholder='Search 1st Movie' type="text" value={this.state.value} onChange={this.handleChange} />
            <input className='button searchButton searchButton1' type="submit" value="Submit"  />
            <p>{this.state.movieTitle}<br></br>{this.state.releaseDate}</p>
          </form>
          
     

        </div>


 


      </div>

    )
  }
}

