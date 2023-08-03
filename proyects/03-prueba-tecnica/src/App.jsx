import { useState, useEffect } from 'react'
import './App.css'
import { newFact, RANDOM_CAT_URL_PREFIX, getFirstWord } from './utilities'

function useCatImage ({ fact }) {
  const [src, setSrc] = useState(null)
  const firstWord = getFirstWord(fact)
  console.log(firstWord)
  console.log(fact)
  const url = `https://cataas.com/cat/says/${firstWord}?json=true`

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setSrc(RANDOM_CAT_URL_PREFIX + data.url)
      })
  }, [fact])
  return { src }
}
export function App () {
  const [fact, setFact] = useState('cats')
  const { src } = useCatImage({ fact })
  console.log((fact))
  console.log(src)

  function getRandomFact () {
    newFact().then(newFact => setFact(newFact))
  }

  // async function imageFunction () {
  //   const firstWord = getFirstWord(fact)
  //   console.log(firstWord)
  //   const url = `https://cataas.com/cat/says/${firstWord}?json=true`

  //   try {
  //     const fet = await fetch(url)
  //     const json = await fet.json()
  //     const { url: urll } = json
  //     setImgObjTurned(json)
  //     setSrc(RANDOM_CAT_URL_PREFIX + urll)
  //     console.log(json)
  //   } catch (errs) {
  //     console.log(errs)
  //   } finally {
  //     console.log(src)
  //   }
  // }

  useEffect(() => {
    getRandomFact()
  }, [])

  // useEffect(() => {
  //   // imageFunction()
  // }, [fact])

  const handleClick = () => getRandomFact()
  return (
    <main className='app'>
      <div className='fact-section'>
        <h2>Fact:</h2>
        {fact && <h1>{fact}</h1>}
      </div>
      <div className='img-section'>
        <h2>Image:</h2>
        <img src={src} alt='cat' />
      </div>
      <button onClick={handleClick}>
        reload
      </button>
    </main>
  )
}
