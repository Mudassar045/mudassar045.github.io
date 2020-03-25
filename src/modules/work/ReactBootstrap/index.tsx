import React from 'react'
import Layout from 'layout/Layout'
import { Link } from 'react-router-dom'

const ReactBootstrap = () => {

	return <Layout>
		<section className="hero">
			<div className="hero-body">
				<div className="container">
					<div className="columns is-vcentered is-centered is-text-centered">
						<div className="column is-half is-narrow content">
							<h1>React Boostrap Usage</h1>
							<p>I found that <a href="https://react-bootstrap.github.io/" target="_blank" rel="noopener noreferrer">React Bootstrap</a> is very intuitive and decided to play with. Below are the working examples</p>
							<h3>React Bootstrap Examples </h3>
							<ul>
								<li><Link to="/works/react-bootstrap/overlay-trigger">Playing with OverlayTrigger</Link></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	</Layout>
}

export default ReactBootstrap