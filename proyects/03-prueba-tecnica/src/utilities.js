export const RANDOM_API_URL = 'https://catfact.ninja/fact'
export const RANDOM_CAT_URL_PREFIX = 'http://www.cataas.com'

export async function newFact () {
  const res = await fetch(RANDOM_API_URL)
  const data = await res.json()
  const { fact } = data
  return fact
}

export const getFirstWord = (fact) => {
  if (typeof fact !== 'string') return
  const firstWord = fact.split(' ', 3).join(' ')
  console.log(`first word is ${firstWord}`)
  return firstWord
}
