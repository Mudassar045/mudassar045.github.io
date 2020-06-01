import React from 'react'
import { Link } from 'react-router-dom'

import Layout from 'layout/Layout'
import { getWorkLinks } from 'constants/WorkLinks'
import ExternLink from 'components/Link'

const Work = () => {

    return <Layout>
        <section className="hero">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-vcentered is-centered">
                        <div className="column is-three-fifths is-narrow content">
                            <h1 id="about-mudassar">My Work</h1>
                            <p>
                                Most of the time I only do programming, learning about new technologies and explore something new every day.
                                Below are some works that I practiced and made demo of them.
                            </p>
                            <h3>Open Source</h3>
                            <ul>
                                {
                                    getWorkLinks("ext").map((work, index) =>
                                        <li key={"ext" + index}><ExternLink href={work.link} title={work.title} /></li>
                                    )
                                }
                            </ul>
                            <h3>Practice</h3>
                            <ul>
                                {
                                    getWorkLinks("app").map((work, index) =>
                                        <li key={"app" + index}><Link to={`/works/${work.link}`}>{work.timestamp ? `${work.timestamp}: ` : ''}{work.title}</Link></li>
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