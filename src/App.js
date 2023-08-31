import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import LanguageItems from './components/LanguageItems'
import LanguageDetails from './components/LanguageDetails'
import NotFound from './components/NotFound'

import './App.css'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={LanguageItems} />
        <Route exact path="/courses/:id" component={LanguageDetails} />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="not-found" />
      </Switch>
    )
  }
}
export default App
