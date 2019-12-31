import React from 'react'
import { Link } from 'react-router-dom'
import config from '../constants/SiteConfig'
import Layout from '../layout/Layout'

const About = () => {

    return(<Layout>
        <section className="hero is-fullheight is-default">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-vcentered is-centered is-text-centered">
                        <div className="column is-half is-narrow content">
                            <h1 id="about-mudassar">About {config.userName}</h1>
                            <p>I’m a Full-Stack software developer at <a href="https://labs.cerp.org.pk">CERP Pakistan</a>. I started, my professional journey back in July, 2019.
                            I'm an avid participant in several local and international open source projects on GitHub.</p>
                            <h3 id="more">More</h3>
                            <ul>
                                <li><a href="https://mudassarali.com/articles/about-me">About Me Blog Post</a></li>
                            </ul>
                            <h3 id="links">Links</h3>
                            <ul>
                                <li><a href="https://github.com/mudassar045">GitHub</a></li>
                                <li><a href="https://www.linkedin.com/in/mudassar-ali-045/">LinkedIn</a></li>
                                <li><a href="https://twitter.com/voidwebdev">Twitter</a></li>
                                <li><a href="https://web.facebook.com/mudassar045">Facebook</a></li>
                                <li><a href="https://instagram.com/voidwebdev">Instagram</a></li>
                                <li><Link to="/contact">Email</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Layout>);
}

export default About