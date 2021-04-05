import React from 'react'
import { Link } from 'react-router-dom'

import config from 'constants/SiteConfig'
import Layout from 'layout/Layout'

const About = () => {
	return (
		<Layout>
			<section className="hero">
				<div className="hero-body">
					<div className="container">
						<div className="columns is-vcentered is-centered">
							<div className="column is-three-fifths content">
								<h1 id="about-mudassar">About Me</h1>
								<p>
									I’m a full-stack Software Developer, currently working at{' '}
									<a href="https://labs.cerp.org.pk" rel="noopener noreferrer" target="_blank">
										CERP Pakistan
									</a>{' '}
									. Building tools for education sector, thinking about creating a bridge between
									technology and education. I am also an avid participant in several local and
									international open source projects on{' '}
									<a href={config.userGitHub} rel="noopener noreferrer" target="_blank">
										GitHub
									</a>
									.
								</p>
								<h3>More</h3>
								<ul>
									<li>
										<Link to="/uses">What tools I use</Link>
									</li>
								</ul>
								<h3>Find me</h3>
								<ul>
									<li>
										<a href={config.resume} rel="noopener noreferrer" target="_blank">
											My Resume
										</a>
									</li>
									<li>
										<a href={config.userGitHub} rel="noopener noreferrer" target="_blank">
											GitHub
										</a>
									</li>
									<li>
										<a href={config.userStackOverflow} rel="noopener noreferrer" target="_blank">
											StackOverflow
										</a>
									</li>
									<li>
										<a href={config.userLinkedIn} rel="noopener noreferrer" target="_blank">
											LinkedIn
										</a>
									</li>
									<li>
										<a href={config.userTwitter} rel="noopener noreferrer" target="_blank">
											Twitter
										</a>
									</li>
									<li>
										<a href={config.userFacebook} rel="noopener noreferrer" target="_blank">
											Facebook
										</a>
									</li>
									<li>
										<a href={config.userInstagram} rel="noopener noreferrer" target="_blank">
											Instagram
										</a>
									</li>
									<li>
										<Link to="/contact">Email</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	)
}

export default About
