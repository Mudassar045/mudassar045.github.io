import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'
import Contact from '../components/Contact'
import Article from '../components/Articles'

import '../styles/App.css'

function App() {

      return (<Router>
                  <Switch>
                        <Route exact path='/' component={ Home }></Route>      
                        <Route path='/me' component={ Home }></Route>
                        <Route path='/about' component={ About }></Route>
                        <Route path='/contact' component={ Contact }></Route>
                        <Route path='/articles' component={ Article }></Route>
                  </Switch>
      </Router>);
}

export default App;
