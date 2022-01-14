import React from 'react'
import Layout from 'layout/Layout'

import projects from 'constants/projects.json'
import ProjectCard from 'components/ProjectCard'

const Project = () => {
	return (
		<Layout>
			<section className="hero">
				<div className="hero-body">
					<div className="container">
						<div className="columns is-vcentered is-centered">
							<div className="column is-two-third content">
								<h1>Projects</h1>
								<p>Here are some projects that I had worked on or currently working on</p>
								<div className="columns is-multiline">
									{projects.map(project => (
										<ProjectCard key={project.id} project={project} />
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	)
}

export default Project
