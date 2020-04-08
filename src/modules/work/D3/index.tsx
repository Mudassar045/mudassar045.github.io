import React from 'react'
import { Link } from 'react-router-dom'

import Layout from 'layout/Layout'

const Charts = () => {

	return <Layout>
		<section className="hero">
			<div className="hero-body">
				<div className="container">
					<div className="columns is-vcentered is-centered">
						<div className="column is-half is-narrow content">
							<h1>Learning D3 - Data Driven Documents</h1>
							<p>
								D3 is a JavaScript library for visualizing data using web standards. D3 helps you bring data to life using SVG, Canvas and HTML.
								D3 combines powerful visualization and interaction techniques with a data-driven approach to DOM manipulation, giving you the
								full capabilities of modern browsers and the freedom to design the right visual interface for your data.
							</p>
							<h3>D3 Examples</h3>
							<ul>
								<li><Link to="/works/d3-learning/day1">D3 Learning Day-1</Link></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	</Layout>
}

export default Charts