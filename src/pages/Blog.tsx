import React from 'react'

import Layout from 'layout/Layout'

const Blog = () => {

    return (
        <Layout>
            <section className="hero">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-vcentered is-centered">
                            <div className="column is-three-fifths is-narrow content">
                                <h1>My Blog</h1>
                                <p>I'm not a professional blog writer, but what I write, it's based on my personal knowledge (also borrowed from others) and experience.</p>
                                <p>Here list of my cool writings:</p>
                                <ul>
                                    <li><a href="https://gist.github.com/Mudassar045" target="_blank" rel="noopener noreferrer">Github Gist</a></li>
                                </ul>
                                {

                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Blog