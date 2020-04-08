import React from 'react'

import config from 'constants/SiteConfig'
import Navigation from 'components/Navigation'

type PropsType = {
    children: React.ReactNode
}

const Layout = ({ children }: PropsType) => {

    return <>
        <Navigation menuLinks={config.menuLinks} />
        {children}
    </>
}

export default Layout