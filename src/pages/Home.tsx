import React from 'react'

import { Avatar } from 'assets/icon'
import SiteConfig from 'constants/SiteConfig'
import Layout from 'layout/Layout'

const Home = () => {

    return (
        <Layout>
            <section className="hero is-fullheight is-default" style={{ minHeight: "80vh" }}>
                <div className="hero-body" style={{ paddingTop: "0rem" }}>
                    <div id="info-container" className="container has-text-centered">
                        <div className="columns is-vcentered">
                            <div className="column is-two-thirds is-centered has-nice-link">
                                <div>
                                    <img id="profile-pic" src={Avatar} width="140" height="140" alt="avatar" />
                                    <h1 className="title is-3">Hi, I'm {SiteConfig.siteTitleAlt}</h1>
                                    <p className="is-size-5">{SiteConfig.homeDescription}</p>
                                </div>
                                <hr style={{ borderColor: "grey" }} />
                                <br />
                                <div className="media">
                                    <div className="media-left">
                                        <a className="image is-64x64 is-marginless no-underline" href="https://labs.cerp.org.pk/">
                                            <img className="is-rounded" src="images/mischool.ico" alt="avatar" />
                                        </a>
                                    </div>
                                    <div className="team-card">
                                        <div className="media-content">
                                            <p className="title is-5">Current Projects</p>
                                            <p className="p-x-children"></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="media">
                                    <div className="media-left">
                                        <a className="image is-64x64 is-marginless no-underline" href={SiteConfig.userGitHub}>
                                            <img className="is-rounded" src="images/oss-heart.svg" alt="oss" />
                                        </a>
                                    </div>
                                    <div className="team-card">
                                        <div className="media-content">
                                            <p className="title is-5">Open-source</p>
                                            <p className="p-x-children"></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="media">
                                    <div className="media-left">
                                        <a className="image is-64x64 is-marginless no-underline" href={SiteConfig.userGitHub}>
                                            <img className="is-rounded" src="images/oss-blog.png" alt="oss" />
                                        </a>
                                    </div>
                                    <div className="team-card">
                                        <div className="media-content">
                                            <p className="title is-5">Blog</p>
                                            <p className="p-x-children"></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Home