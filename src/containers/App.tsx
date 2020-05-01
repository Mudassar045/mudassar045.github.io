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
import CondConstruct from 'modules/work/CondConstruct'

function App() {

      return <Router>
            <Switch>
                  <Route exact path='/' component={Home} />
                  <Route path='/me' component={Home} />
                  <Route path='/uses' component={Tool} />
                  <Route path='/about' component={About} />
                  <Route exact path='/works' component={Work} />
                  <Route path='/works/image-gallery' component={ImageGallery} />
                  <Route path='/works/transliterate' component={Transliterate} />
                  <Route path='/works/emoji-explorer' component={EmojiExplorer} />
                  <Route path='/works/character-counter' component={CharacterCounter} />
                  <Route path="/works/random-string-generator" component={RandomeStringGenerator} />
                  <Route exact path="/works/react-bootstrap" component={ReactBootstrap} />
                  <Route path="/works/react-bootstrap/overlay-trigger" component={OverlayTriggerExample} />
                  <Route path="/works/d3-learning" component={Charts} />
                  <Route exact path="/works/printing/sample-1" component={ExamplePagePrint} />
                  <Route exact path="/works/cond-construct" component={CondConstruct} />
                  <Route path='/contact' component={Contact} />
                  <Route path='/articles' component={Article} />
            </Switch>
      </Router>
}

export default App