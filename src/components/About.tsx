import React from 'react'
import { Link } from 'react-router-dom'
import config from '../constants/SiteConfig'
import Layout from '../layout/Layout'

const About = () => {

    return(
        <Layout>
            <section className="hero is-fullheight is-default">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-vcentered is-centered is-text-centered">
                            <div className="column is-half is-narrow content">
                                <h1 id="about-mudassar">About {config.userName}</h1>
                                <p>I’m a full-stack Software Developer, working at <a href="https://labs.cerp.org.pk" rel="noopener noreferrer" target="_blank">CERP Pakistan</a>. I started, my professional journey back in July, 2019.
                                   Currently working on <a href='https://mischool.pk' rel="noopener noreferrer" target="_blank"> MISchool</a>. While working, I add new features and improve user experience. I'm also an avid participant
                                   in several local and international open source projects on <a href={config.userGitHub} rel="noopener noreferrer" target="_blank">GitHub</a></p>
                                <h3 id="more">More</h3>
                                <ul>
                                    <li><a href="https://mudassarali.com/articles/about-me">About Me Blog Post</a></li>
                                </ul>
                                <h3 id="links">Links</h3>
                                <ul>
                                    <li><a href={config.userGitHub}>GitHub</a></li>
                                    <li><a href={config.userStackOverFlow}>StackOverFlow</a></li>
                                    <li><a href={config.userLinkedIn}>LinkedIn</a></li>
                                    <li><a href={config.userTwitter}>Twitter</a></li>
                                    <li><a href={config.userFacebook}>Facebook</a></li>
                                    <li><a href={config.userInstagram}>Instagram</a></li>
                                    <li><Link to="/contact">Email</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
        );
}

export default About