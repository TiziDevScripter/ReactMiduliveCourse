const API_KEY = '9618d8c7'
export async function searchMovies({ search }) {

    if(search && search.length >= 3) {
      // setResponseMovie(withResults)
      if(search == '') return ;

      return fetch(`http://www.omdbapi.com/?s=${search}&apikey=${API_KEY}`)
        .then(res => res.json())
        .then(movies => {
          console.log(movies.Search);

          return movies.Search
          .filter(movie => movie.Type == 'movie')
          .map(movie => ({
            title: movie.Title,
            img: movie.Poster,
            year: movie.Year
          }))
        })
        .catch(err => {
          console.log(err);
          return []
        })
    } else {
      return []
    }

  // try {
  //   const response = await fetch(`http://www.omdbapi.com/?s=${search}&apikey=${API_KEY}`)
  //   const json = await response.json()
  //   const movies = json?.Search
  //   // ?.filter(movie => movie.Type == 'movie')

  //   return movies?.map(movie => ({
  //     id: movie.imdbID,
  //     title: movie.Title,
  //     year: movie.Year,
  //     img: movie.Poster,
  //     type: movie.Type,
  //   }))
  // } catch(error) {
  //   throw new Error(error)
  // }

}