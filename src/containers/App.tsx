import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import Home from 'pages/Home'
import About from 'pages/About'
import Contact from 'pages/Contact'
import Article from 'pages/Article'
import Work from 'pages/Work'
import Tool from 'pages/Tool'

import ImageGallery from 'modules/work/ImageGallery'
import Transliterate from 'modules/work/Transliterate'
import EmojiExplorer from 'modules/work/EmojiExplorer/EmojiExplorer'
import CharacterCounter from 'modules/work/CharacterCounter'
import RandomeStringGenerator from 'modules/work/StringsGenerator'
import ReactBootstrap from 'modules/work/ReactBootstrap/'
import OverlayTriggerExample from 'modules/work/ReactBootstrap/Overlays/OverlayTrigger'

import Charts from 'modules/work/D3'
import { ExamplePagePrint } from 'modules/work/Printing/SampleUsingReactPdf'

function App() {

      return <Router>
            <Switch>
                  <Route exact path='/' component={Home}></Route>
                  <Route path='/me' component={Home}></Route>
                  <Route path='/uses' component={Tool}></Route>
                  <Route path='/about' component={About}></Route>
                  <Route exact path='/works' component={Work}></Route>
                  <Route path='/works/image-gallery' component={ImageGallery}></Route>
                  <Route path='/works/transliterate' component={Transliterate}></Route>
                  <Route path='/works/emoji-explorer' component={EmojiExplorer}></Route>
                  <Route path='/works/character-counter' component={CharacterCounter}></Route>
                  <Route path="/works/random-string-generator" component={RandomeStringGenerator}></Route>
                  <Route exact path="/works/react-bootstrap" component={ReactBootstrap}></Route>
                  <Route path="/works/react-bootstrap/overlay-trigger" component={OverlayTriggerExample}></Route>
                  <Route path="/works/d3-learning" component={Charts}></Route>
                  <Route exact path="/works/printing/sample-1" component={ExamplePagePrint}></Route>
                  <Route path='/contact' component={Contact}></Route>
                  <Route path='/articles' component={Article}></Route>
            </Switch>
      </Router>
}

export default App