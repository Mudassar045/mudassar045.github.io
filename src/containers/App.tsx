import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'
import Contact from '../components/Contact'
import Article from '../components/Article'
import Work from '../components/Work'
import Tool from '../components/Tool'

function App() {

      return (<Router>
                  <Switch>
                        <Route exact path='/' component={ Home }></Route>      
                        <Route path='/me' component={ Home }></Route>
                        <Route path="/uses" component={ Tool }></Route>
                        <Route path='/about' component={ About }></Route>
                        <Route path='/works' component={ Work }></Route>
                        <Route path='/contact' component={ Contact }></Route>
                        <Route path='/articles' component={ Article }></Route>
                  </Switch>
      </Router>);
}

export default App;
