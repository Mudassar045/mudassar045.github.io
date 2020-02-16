import React, { Component } from 'react'
import Layout from 'layout/Layout'
import { Link } from 'react-router-dom';

class Work extends Component {

    render() {

        return (
            <Layout>
                <section className="hero">
                    <div className="hero-body">
                        <div className="container">
                            <div className="columns is-vcentered is-centered is-text-centered">
                                <div className="column is-half is-narrow content">
                                    <h1 id="about-mudassar">What I really DO</h1>
                                    <p>Most of the time I only do programming, learning about new technologies and explore something new every day.
                                        Below are some works that I practiced and made demo of them.</p>
                                    <h3 id="more">My Works</h3>
                                    <ul>
                                        <li><Link to="/works/image-gallery">Image Gallery with React Motion</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        );
    }
}

export default Work