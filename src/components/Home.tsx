import React from 'react'
import SiteConfig from './../constants/SiteConfig'
import Avatar from './../assets/mudassar-ali.jpg'

const Home = () => {

    return(<>
        <section className="hero is-fullheight is-default">
            <div className="hero-body">
                <div id="info-container" className="container has-text-centered">
                    <div className="columns is-vcentered">
                        <div className="column is-two-thirds is-centered has-nice-link">
                            <div>
                                <img id="profile-pic" src={Avatar} width="160" height="160" alt="avatar"/>
                                <h1 className="title is-2">{SiteConfig.userName}</h1>
                                <h2 className="subtitle is-4">{SiteConfig.whoAm}</h2>
                                <p>{SiteConfig.homeDescription}</p>
                            </div>
                            <br/>
                            <p className="has-text-centered">
                                <a className="button is-large is-white" href={SiteConfig.blog}>
                                    <span className="icon">
                                        <i className="fa fa-pencil"></i>
                                    </span>
                                    <span>Writings</span>
                                </a>
                                <a className="button is-large is-white" href={SiteConfig.userGitHub}>
                                    <span className="icon">
                                        <i className="fa fa-github"></i>
                                    </span>
                                    <span>Code</span>
                                </a>
                                <a className="button is-large is-white" href={SiteConfig.userTwitter}>
                                    <span className="icon">
                                        <i className="fa fa-twitter"></i>
                                    </span>
                                    <span>Tweets</span>
                                </a>
                            </p>
                            <br/>
                            <a href="/thanks">Huge thanks to all my amazing supporters!</a>
                        </div>
                    </div>
                </div>
                <div className="hero-foot">
                    <div className="container">
                        <div className="tabs is-centered">
                            <ul>
                                <li>
                                    <i id="scroll-hint" className="fa fa-caret-down" aria-hidden="true"></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>);
}

export default Home