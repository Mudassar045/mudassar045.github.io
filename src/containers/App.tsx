import React from 'react'
import config from './../constants/SiteConfig'
import './../styles/App.css'
import Navigation from './../components/Navigation'

function App() {

      return (
            <>
            <Navigation menuLinks = { config.menuLinks } />
            </>
        );
}

export default App;
