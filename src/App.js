import {Switch, Route} from 'react-router-dom'

import MainOne from './components/MainOne'

import LanguageDetaile from './components/LanguageDetaile'

import NotFound from './components/NotFound'

import './App.css'

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/" component={MainOne} />
    <Route exact path="/courses/:id" component={LanguageDetaile} />
    <Route component={NotFound} />
  </Switch>
)

export default App
