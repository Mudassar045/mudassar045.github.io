import React from 'react'
import { Link } from 'react-router-dom'

type PropsType = {
    menuLinks: MenuLink[]
}

const Navigation = ({ menuLinks }: PropsType) => {

    const path = window.location.href

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-menu">
                <div className="navbar-end">
                    {
                        menuLinks.map(link => (
                            <Link className={`navbar-item has-text-weight-bold is-tab ${path.includes(link.link) ? 'is-active' : ''}`} key={link.name} to={link.link}>{link.name}</Link>
                        ))
                    }
                </div>
            </div>
        </nav>
    )
}

export default Navigation