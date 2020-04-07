import React from 'react';

class MovieItem extends React.Component {

    constructor(){
        super();
        this.state = {
          willWatch: false
        }
    } 
    
    // componentWillUnmount(){
    //     console.log('Unmount', this.props.movie.title);
    // }



    render(){
        const {movie, removeMovie, appendMovieToWillWatch, removeMoviefromWillWatch} = this.props;
        return(
            <div className="card">
                <img
                    className="card-img-top"
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path ||
                    movie.poster_path}`}
                    alt=""
                />    
                <div className="card-body">
                    <h6 className="card-title">{movie.title}</h6>
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="mb-0">Rating: {movie.vote_average}</p>
                        
                            <button 
                                type="button" 
                                className={`btn ${this.state.willWatch ? "btn-sucsses": "btn-secondary"}`}
                                onClick={ 
                                   () => {
                                    this.setState({
                                        willWatch: !this.state.willWatch
                                    });
                                    //removeMoviefromWillWatch.bind(null, movie);
                                    this.state.willWatch ? removeMoviefromWillWatch(movie) : appendMovieToWillWatch(movie)
                                   }     
                                }
                            >
                                   {`${this.state.willWatch ? 'Remove Will Watch': 'Add Will Watch'}`}
                            </button> 
                            
                    
                        
                        
                    </div>
                    <button onClick={ removeMovie.bind(null, movie) }>
                          
                                DELITE MOVIE
                    </button>
            
                </div>
            </div>   
    );
    }
}


export default MovieItem;



// { this.state.willWatch ?
//     <button 
//         type="button" 
//         className="btn btn-sucsses"
//         onClick={ 
//            () => {
//             this.setState({
//                 willWatch: false
//             });
//             //removeMoviefromWillWatch.bind(null, movie);
//             removeMoviefromWillWatch(movie);
//            }     
//         }
//     >
//            Remove Will Watch
//     </button> : <button 
//         type="button" 
//         className="btn btn-secondary"
//         onClick={ 
//             () => {
            
//             this.setState({
//                 willWatch: true
//             });
//             //appendMovieToWillWatch.bind(null, movie)
//             appendMovieToWillWatch(movie)
//            }  
//         }
//     >
//             Add Will Watch
//     </button>

// }









// MovieItem
// <div className="card">
//   <img
//     className="card-img-top"
//     src={`https://image.tmdb.org/t/p/w500${item.backdrop_path ||
//       data.poster_path}`}
//     alt=""
//   />
//   <div className="card-body">
//     <h6 className="card-title">{data.title}</h6>
//     <div className="d-flex justify-content-between align-items-center">
//       <p className="mb-0">Rating: {data.vote_average}</p>
//       <button type="button" className="btn btn-secondary">
//         Will Watch
//       </button>
//     </div>
//   </div>
// </div>;
// MovieListWillWatch
// <h4>Will Watch: movies</h4>
// <ul className="list-group">
//     <li className="list-group-item">
//       <div className="d-flex justify-content-between">
//       </div>
//     </li>
//   ))}
// </ul>