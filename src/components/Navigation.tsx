import React, { Component } from 'react';
import './../styles/main.css';
import AnimalAvatar from './../assets/cool-cat.png'
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
        
        const { menuLinks } = this.props

        return (
            <>
                <div className="hero-head">
                    <div className="container">
                        <nav className="navbar has-shadow" role="navigation" aria-label="main navigation">
                        <div className="navbar-brand">
                            <a id="unicorn-btn" className="navbar-item" href="https://mudassarali.com">
                                <img src={AnimalAvatar} alt="cat"/>
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
