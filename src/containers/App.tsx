import React from 'react'
import config from './../constants/SiteConfig'
import './../styles/App.css'
import Navigation from './../components/Navigation'
import Home from './../components/Home'

function App() {

      return (
            <>
            <Navigation menuLinks = { config.menuLinks } />
            <Home/>
            </>
        );
}

export default App;
