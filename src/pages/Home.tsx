import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

import { Avatar } from 'assets/icon'
import SiteConfig from 'constants/SiteConfig'
import Layout from 'layout/Layout'

const Home = () => {

    return (
        <Layout>
            <section className="hero is-fullheight is-default">
                <div className="hero-body">
                    <div id="info-container" className="container has-text-centered">
                        <div className="columns is-vcentered">
                            <div className="column is-two-thirds is-centered has-nice-link">
                                <div>
                                    <img id="profile-pic" src={Avatar} width="160" height="160" alt="avatar" />
                                    <h1 className="title is-2">{SiteConfig.userName}</h1>
                                    <h2 className="subtitle is-4">{SiteConfig.whoAm}</h2>
                                    <p>{SiteConfig.homeDescription}</p>
                                </div>
                                <br />
                                <p className="has-text-centered">
                                    <a className="button is-large is-white" href={SiteConfig.blog}>
                                        <span className="icon">
                                            <FontAwesomeIcon icon={faCoffee} />
                                        </span>
                                        <span>Writings</span>
                                    </a>
                                    <a className="button is-large is-white" href={SiteConfig.userGitHub}>
                                        <span className="icon">
                                            <FontAwesomeIcon icon={faGithub} />
                                        </span>
                                        <span>Code</span>
                                    </a>
                                    <a className="button is-large is-white" href={SiteConfig.userTwitter}>
                                        <span className="icon">
                                            <FontAwesomeIcon icon={faTwitter} />
                                        </span>
                                        <span>Tweets</span>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Home