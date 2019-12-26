import React, { Component } from 'react';
import './../styles/main.css';

interface P {
	menuLinks: MenuLink[]
}

interface S {
	scrolled: boolean
}

class Navigation extends Component<P, S> {

    constructor(props: P) {
        super(props)
        this.state = {
           scrolled: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.navOnScroll)
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.navOnScroll)
    }
    
    navOnScroll = () => {
        if (window.scrollY > 20) {
          this.setState({ scrolled: true })
        } else {
          this.setState({ scrolled: false })
        }
    }

    render() {
        
        const { scrolled } = this.state
        const { menuLinks } = this.props

        return (
            <>
                <div className="hero-head">
                    <div className="container">
                        <nav className="navbar has-shadow" role="navigation" aria-label="main navigation">
                        <div className="navbar-brand">
                            <a id="unicorn-btn" className="navbar-item" href="https://mudassarali.com/unicorn" title="Click me!"><span>🦄</span></a>
                            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                            </a>
                        </div>
                        <div className="navbar-menu">
                            <div className="navbar-end">   
                            {
                                menuLinks.map(link => (
                                    <a className="navbar-item is-tab" key={link.name} href={link.link} >{link.name}</a>
                                ))
                            }
                            </div>
                        </div>
                        </nav>
                    </div>
                </div>
            </>
        );
    }
}

export default Navigation
