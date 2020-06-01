import React from 'react'

import Layout from 'layout/Layout'
import config from 'constants/SiteConfig'

const Contact = () => {
    return <>
        <Layout>
            <section className="hero">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-vcentered is-centered" style={{ marginBottom: 180 }}>
                            <div className="column is-three-fifths is-narrow content">
                                <h1 id="contact">Contact</h1>
                                <p>I value my time, so make it worth, and <a href="https://www.google.com/search?q=succinct+emails">keep it succinct</a>.</p>
                                <hr />
                                <p id="email" style={{ fontSize: 18, textAlign: "center" }}>
                                    <a href={`mailto:${config.userEmail}`}>{config.userEmail}</a>
                                </p>
                                <hr />
                                <p>Please no support questions, job offers, questionnaires, etc.</p>
                                <p>If the answer to your question could be interesting to others, consider asking in my <a href={`${config.userGitHub}/ama`}>AMA</a> instead.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    </>
}

export default Contact