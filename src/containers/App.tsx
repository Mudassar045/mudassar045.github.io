import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import Home from 'pages/Home'
import About from 'pages/About'
import Contact from 'pages/Contact'
import Blog from 'pages/Blog'
import Work from 'pages/Work'
import Project from 'pages/Project'
import Tool from 'pages/Tool'

import ImageGallery from 'modules/work/ImageGallery'
import Transliterate from 'modules/work/Transliterate'
import EmojiExplorer from 'modules/work/EmojiExplorer/EmojiExplorer'
import CharacterCounter from 'modules/work/CharacterCounter'
import RandomeStringGenerator from 'modules/work/StringsGenerator'

import Charts from 'modules/work/D3'
import { ExamplePagePrint } from 'modules/work/Printing/SampleUsingReactPdf'
import SMSTesting from 'modules/work/SMSTesting'

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/me" component={Home} />
				<Route path="/uses" component={Tool} />
				<Route path="/about" component={About} />
				<Route path="/projects" component={Project} />
				<Route exact path="/works" component={Work} />
				<Route path="/works/image-gallery" component={ImageGallery} />
				<Route path="/works/transliterate" component={Transliterate} />
				<Route path="/works/emoji-explorer" component={EmojiExplorer} />
				<Route path="/works/character-counter" component={CharacterCounter} />
				<Route path="/works/random-string-generator" component={RandomeStringGenerator} />
				<Route path="/works/d3-learning" component={Charts} />
				<Route exact path="/works/printing/sample-1" component={ExamplePagePrint} />
				<Route path="/works/sms-api-testing" component={SMSTesting} />
				<Route path="/contact" component={Contact} />
				<Route path="/blog" component={Blog} />
			</Switch>
		</Router>
	)
}

export default App
