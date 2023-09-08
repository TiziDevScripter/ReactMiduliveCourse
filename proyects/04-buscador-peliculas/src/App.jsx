import { useEffect, useRef, useState, useCallback } from 'react' 
import { useMovies } from './hooks/useMovies'
import { Movies } from './components/Movies'

import './App.css'

function useSearch() {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstTime = useRef(true)
  useEffect(()=>{
    if(isFirstTime.current) {
      isFirstTime.current = search == ''
      console.log(search == '');
      return
    }
    
    if(search == 0) {
      setError('campo obligatorio')
      return
    }
    if(search.length <= 3) {
      setError('debe ser mayor que 3')
      return
    }
    console.log(search);
    // console.log(search)
    setError(null)

  },[search])

  return {search, updateSearch, error}
}

function App() {
  const { search, updateSearch, error } = useSearch()
  const [sort, setSort] = useState(false)
  const { movies, getMovies } = useMovies({search, sort})
  
  function handleSubmit(event) {
    event.preventDefault()
    // const { movie } = Object.fromEntries(new window.FormData(event.target))
    getMovies({search})
  }
  console.log('render');
  function handleChange(event) {
    const currentMovie = event.target.value
    updateSearch(currentMovie)
    setTimeout(() => {
      getMovies({search: currentMovie})
    }, 1000)
  }

  function handleSort() {
    setSort(!sort)
  }

  return (
    <>
      <header>
        <h1>Movie <mark>Searcher</mark></h1>
        <form onSubmit={handleSubmit} className='form-searcher'>
          <div className='form-searcher__sections'>
            <label htmlFor="inputSearch">Put a movie:</label>
            <input onChange={handleChange} name='movie' type="text" id='inputSearch' 
            placeholder='Terminator2, The Matrix, Rambo, ...' />
            <span>{error}</span>
          </div>
          <div className='form-searcher__sections'>
            <label htmlFor="checkFilter">
              order by title
              <input type="checkbox" onClick={handleSort} id="checkFilter"/>
            </label>
          </div>
        </form>
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </>
  )
}

export default App
