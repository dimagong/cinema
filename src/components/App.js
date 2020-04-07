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
      sort_by: 'popularity.desc',
      page: '',
      total_pages: ''
    }

    //console.log("constructor");
  }

  componentDidMount(){
    //console.log("didmount");
    this.getMovies();
    //console.log("after fetch");
  }

  componentDidUpdate(prevProps, prevState){
    // console.log('DidUpdate');
    // console.log('presprops, prevState ', prevProps, prevState);
    //console.log('this', this.props, this.state);

    if( prevState.sort_by !== this.state.sort_by 
       || prevState.page !== this.state.page){
      //console.log('call api');
      this.getMovies();
    } 
    // if(prevState.page !== this.state.page){
    //   this.getMovies();
    // }
  }

  getMovies = () => {
    fetch(`${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sort_by}&page=${this.state.page}`).then( 
      response => {//console.log("then");
      return  response.json()}
      ).then( (data) => {
          // console.log("data", data);
          // console.log("data", data.page);
          this.setState({
            movies: data.results,
            page: data.page,
            total_pages: data.total_pages
          })
        }
       );
  }

  nextString = () => {
    this.setState({
      page: this.state.page + 1
    })
  }

  previousString = () => {
    if(this.state.page > 1){
      this.setState({
        page: this.state.page - 1
      })
    } 
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
      console.log("render App");
        return (
          <div className="container">
            <div className="row mt-4">
                <div className="col-9">
                    <div className="row mb-4">
                      <div className="col-12">
                          <MovieTabs 
                            sort_by={this.state.sort_by} 
                            updateSortBy={this.updateSortBy}
                            page={this.state.page} 
                            total_pages={this.state.total_pages}
                            nextString={this.nextString}
                            previousString={this.previousString}
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
