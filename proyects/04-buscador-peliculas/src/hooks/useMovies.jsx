// import withResults from '../mocks/with-results.json'
// import withoutResults from '../mocks/no-results.json'

import { useState, useRef, useMemo, useCallback } from 'react'
import { searchMovies } from '../logic/movies'

export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([])
  const searchIsRepeated = useRef(search)
  
  const getMovies = useCallback(async ({search}) => {
    if(searchIsRepeated.current == search) return
    searchIsRepeated.current = search

    const newMovies = await searchMovies({ search })
    setMovies(newMovies)
  }, [])

  const sortedMovies = useMemo(() => sort
  ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
  : movies, [sort,movies])

  return {movies: sortedMovies, getMovies}
}
