function WithResults({movies}) {
    // console.log(movies)
    return (
        <ul className="movies-container">
        {
            movies?.map((movie, index) => (
            <li className="movie" key={index}>
                <img src={movie.img} alt="movie-poster" />
                <h4>{movie.title} *<span><small>{ movie.year }</small></span></h4>  
            </li>
            ))
        }
        </ul>
    )
}
function WithoutResults() {
    return (
        <p>Movie not found</p>
        )
    }
export function Movies({ movies }) {
    // console.log(movies)
    const hasMovies = movies.length == 0
    return (
        
        hasMovies ?
        <WithoutResults /> :
        <WithResults movies={movies}/>  
        
    )
  }