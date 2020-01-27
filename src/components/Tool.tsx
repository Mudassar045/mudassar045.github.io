import React from 'react'
import Layout from '../layout/Layout'

const Tool = () => {
    return(
        <Layout>
            <section className="hero is-fullheight is-default">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-vcentered is-centered is-text-centered" style={{marginBottom: 180}}>
                            <div className="column is-half is-narrow content">
                                <h1 id="contact">What Tools I use</h1>
                                <p>Here's a list of all the tools I use. If I missed a category, just contact me and I'll make sure to add it.</p>
                                <h3 id="links">Code Tips</h3>
                                <ul>
                                    <li><a href="https://carbon.now.sh/">Carbon</a></li>
                                    <li><a href="https://getemoji.com/">Get Emoji</a></li>
                                    <li><a href="https://canva.com/">Canva</a></li>
                                    <li><a href="https://www.microsoft.com/en-pk/p/paint-3d/9nblggh5fv99?activetab=pivot:overviewtab/">MS Paint</a></li>
                                </ul>
                                <h3 id="links">Computer</h3>
                                <p>These are my programming hardware and software.</p>
                                <ul>
                                    <li><a href="https://www.lenovo.com/pk/en/laptops/thinkpad/thinkpad-e-series/ThinkPad-E580/p/22TP2TEE580">Lenovo E580 with Linux Ubuntu</a></li>
                                    <li><a href="https://code.visualstudio.com/">VS Code Editor</a></li>
                                    <li><a href="https://github.com/mudassar045">Github</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
        );
}

export default Tool