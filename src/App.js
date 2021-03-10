import React from 'react'
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import HomePage from './pages/homepage/HomePage'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage} />
      </Switch>
    </Router>
  )
}
