import React, { Component } from "react";
import "./style.css";

class App extends Component {
constructor(props){
  super(props)
  this.state = {
    pics: [
      <p key='1'>Place Movie Pic 1 Here</p>,
      <p key='2'>Place Movie Pic 2 Here</p>
    ],
    movieTitle: '',
    releaseDate: '',
    moviePic: '',
    popularity: '',
    searchMovie: '',
  }
}





  fetchMovieData = async () => {
    const API_KEY = '13f56fa7645fad328dd8b8c35c7a3f48';
    const apiURL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(this.state.searchMovie)}&page=1&include_adult=false`;
    const apiData = await fetch(apiURL);
    const jsonApi = await apiData.json();
    console.log('this is jsonApi', jsonApi)
    console.log('this is jsonApi.results[0]', jsonApi.results[0])
    this.setState({
      movieTitle: jsonApi.results[0].original_title,
      releaseDate: jsonApi.results[0].release_date,
      moviePic: jsonApi.results[0].poster_path,
      popularity: jsonApi.results[0].popularity,
    })
  }

  

  handleChange = (event) => {
    this.setState({searchMovie: event.target.value});
  }

  handleSubmit= (event) => {
    console.log('Person 1 has selected this movie ' + encodeURIComponent(this.state.searchMovie));
    event.preventDefault();
    this.fetchMovieData()
  }




  render() {
    return ( 
    <div className='container'>
    <div className="App">Hello World</div>
    <br></br>
    <div>{this.state.pics}</div>

      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      

      <form className='form form1'>
      <input className='searchBar searchBar2' placeholder='Search 2nd Movie' type='search' ></input>
      <button className='button searchButton searchButton1' type='submit'>Search</button>
      </form>




    </div>
    
  )
  }
}

export default App;
