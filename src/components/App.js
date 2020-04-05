import React from 'react';

// import './App.css';
//import {moviesData} from '../MoviesData';
import MovieItem from "./MovieItem";
import {API_URL, API_KEY_3} from '../utils/api';
import MovieTabs from './MovieTabs';


//console.log({moviesData});

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      //movies: moviesData,
      movies: [],
      moviesWillWatch: [],
      sort_by: 'vote_average.desc'
    }

    console.log("constructor");
  }

  componentDidMount(){
    console.log("didmount");
    fetch(`${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sort_by}`).then( 
      response => {console.log("then");
      return  response.json()}
      ).then( (data) => {
        console.log("data", data);
        this.setState({
          movies: data.results
        })
      }
       
      );
    console.log("after fetch");
  }
  
  removeMovie = (movie) => {
    const updateMovie = this.state.movies.filter( (item) => { 
      return (item.id !== movie.id); 
    } )
    //console.log('updateMovie', updateMovie);
    this.setState({
      movies: updateMovie
    })
  } 

  appendMovieToWillWatch = (movie) => {

    //const term = [...this.state.moviesWillWatch, movie]

    this.setState({
    moviesWillWatch: [...this.state.moviesWillWatch, {...movie}]
    })
  }
  //[...this.state.moviesWillWatch, {...movie}]

  removeMoviefromWillWatch = (movie) => {
    const updateMoviesWillWatch = this.state.moviesWillWatch.filter( (item) => { 
      return (item.id !== movie.id); 
    } )
    // console.log('updateMoviesWillWatch', updateMoviesWillWatch);
    this.setState({
      moviesWillWatch: updateMoviesWillWatch
    })
  } 

  updateSortBy = (value) => {
    this.setState({
      sort_by: value
    })
  }

  render() {
      //console.log("render", this.state);
      console.log("render");
        return (
          <div className="container">
            <div className="row mt-4">
                <div className="col-9">
                    <div className="row mb-4">
                      <div className="col-12">
                          <MovieTabs 
                            sort_by={this.state.sort_by} 
                            updateSortBy={this.updateSortBy} 
                          />
                      </div> 
                    </div>
                    <div className="row">
                      
                        {
               
                            this.state.movies.map( (movie) => {
                              return (
                                        <div className="col-6 mb-4" key={movie.id} >
                                            <MovieItem  
                                            //key={movie.id}  
                                            movie={movie}  
                                            removeMovie={this.removeMovie} 
                                            appendMovieToWillWatch={this.appendMovieToWillWatch}
                                            removeMoviefromWillWatch={this.removeMoviefromWillWatch}
                                            />
                                        </div>
                                    );
                              })
                     
                        }
              </div>
            </div>
                <div className="col-3">
                      <p>WILL WATCH {this.state.moviesWillWatch.length}</p>
                </div>
          </div>
 
         </div>
      );
  }
  
}

export default App;
