import { useState, useEffect, Children } from 'react'
import { NAVIGATION_EVENT } from '../consts'
import { match }  from 'path-to-regexp'
// eslint-disable-next-line react/prop-types
export function Router({ children, routes = [], defaultComponent: DefaultComponent = () => <h1>Error: 404</h1> }) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname)
    console.log(children);
    useEffect(() => {
      const onNavigate = () => {
        setCurrentPath(window.location.pathname)
      }   
  
      window.addEventListener(NAVIGATION_EVENT.PUSHSTATE, onNavigate)
      window.addEventListener(NAVIGATION_EVENT.POPSTATE, onNavigate)
  
      return () => {
        window.removeEventListener(NAVIGATION_EVENT.PUSHSTATE, onNavigate)
        window.removeEventListener(NAVIGATION_EVENT.POPSTATE, onNavigate)
      }
    },[])
  
    let routeParams = {}
    // sacar rutas desde el children con Children map
    const routesFromChildren = Children.map(children, ({props, type}) => {
      const {name} = type
      const isRoute = name === 'Route'

      return isRoute ? props : null
    })

    // concatenar ambos arrays de rutas
    const routesToUse = routes.concat(routesFromChildren)

    const Page = routes.find(({path}) => {
      if(path === currentPath) return true

      // hemos usado path-to-regexp
      // para poder detectar rutas dinámicas como por ejemplo
      // /search/:query  <-  :query es una ruta dinámica  
      const matcherUrl = match(path, { decode: decodeURIComponent })
      const matched = matcherUrl(currentPath)
      if(!matched) return false
      console.log(matched)
      // guardar los parámetros de la url que eran dinámicos
      // y que hemos extraído con path-to-regexp
      // por ejemplo, si la ruta es /search/:query
      // y la url es /search/javascript
      // matched. params query - 'javascript
      routeParams = matched.params
      return true
    })?.Component
    console.log(Page);
    return Page 
    ? <Page routeParams={routeParams} /> 
    : <DefaultComponent routeParams={routeParams} />
  }