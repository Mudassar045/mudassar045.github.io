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
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Home