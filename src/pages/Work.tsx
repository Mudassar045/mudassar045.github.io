import React from 'react'
import { Link } from 'react-router-dom'

import Layout from 'layout/Layout'
import { getWorkLinks } from 'constants/WorkLinks'

const Work = () => {

    return <Layout>
        <section className="hero">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-vcentered is-centered">
                        <div className="column is-half is-narrow content">
                            <h1 id="about-mudassar">What I really DO</h1>
                            <p>
                                Most of the time I only do programming, learning about new technologies and explore something new every day.
                                Below are some works that I practiced and made demo of them.
                            </p>
                            <h3 id="more">My Works</h3>
                            <ul>
                                {
                                    getWorkLinks("ext").map((work, index) =>
                                        <li key={"ext" + index}><a href={work.link} target="_blank" rel="noopener noreferrer">{work.title}</a></li>
                                    )
                                }
                                {
                                    getWorkLinks("app").map((work, index) =>
                                        <li key={"app" + index}><Link to={`/works/${work.link}`}>{work.title}</Link></li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
}

export default Work