import React, { Component } from 'react'

import Layout from 'layout/Layout'

class Article extends Component {

    render() {

        return <>
            <Layout>
                <section className="hero">
                    <div className="hero-body">
                        <div className="container">
                            <div className="columns is-vcentered is-centered">
                                <div className="column is-half is-narrow content">
                                    <h1>Coming soon...</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    }
}

export default Article