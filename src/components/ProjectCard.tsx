import React from 'react'
import SpringContainer from './SpringContainer'

type PropsType = {
	project: Project
}

type Project = {
	id: number
	title: string
	url: string
	image: string
	description: string
	tags: string[]
	tech: string[]
	status: string
}

const ProjectCard = ({ project }: PropsType) => {
	return (
		<SpringContainer styles="column is-mobile is-half-tablet is-one-third-desktop">
			<a href={project.url}>
				<div className="box">
					<figure className="image">
						<img src={`images/${project.image}`} className="is-256x256" alt={project.title} />
					</figure>
					<h4 className="title is-size-3">
						<span style={{ paddingRight: 4 }}>{project.title}</span>
						{project.tags.map(tag => (
							<span key={tag} className="tag is-small">
								{tag}
							</span>
						))}
					</h4>
					<p className="subtitle is-6">{project.description}</p>
					<p className="technology">
						{project.tech.map(tech => (
							<span key={tech} className="tag is-small">
								{tech}
							</span>
						))}
						<span className="tag status is-small">{project.status}</span>
					</p>
				</div>
			</a>
		</SpringContainer>
	)
}

export default ProjectCard
