import './App.css'

import Home from './Home'
import About from './About'
import AdminPanel from './Admin'
import Navigation from './Navigation'

import { Switch, Route, Redirect } from 'react-router-dom'
import RouteParams from './RouteParams'
import QueryStrings from './QueryStrings'

const App = () => {

  //const loggedUser = { username: 'Chorlito' }
  const loggedUser = undefined

  return (

    <>
      <Navigation />

      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/sobre-mi" render={() => <About />} />
        <Route path="/panel-admin" render={() => loggedUser ? <AdminPanel loggedUser={loggedUser} /> : <Redirect to="/" />} />

        <Route path="/tienda/ropa/:clothe/temporada/:season" render={props => <RouteParams {...props} />} />
        <Route path="/vuelos" render={props => <QueryStrings {...props} />} />
      </Switch>
    </>
  )
}

export default App;
