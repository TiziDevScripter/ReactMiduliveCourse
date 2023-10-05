import './App.css'
import { Router } from './components/Router'
import { Route } from './components/Route'
import HomeComponent from './pages/HomeComponent'
import AboutComponent from './pages/AboutComponent'
import SearchComponent from './pages/SearchComponent'
import { Page404 } from './pages/Page404'

const routes = [
  {
    path: '/search/:query',
    Component: SearchComponent
  }
]

function App() {
  return (
    <>
      <Router routes={routes} defaultComponent={Page404}>
        <Route path="/" component={HomeComponent} />
        <Route path="/about" component={AboutComponent} />
      </Router>
    </>
  )
}

export default App
