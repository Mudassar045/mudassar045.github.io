import React from 'react'

type PropsType = {
	href: string
	title: string
}

const ExternLink = ({ href, title }: PropsType) => (
	<a href={`https://${href}`} target="_blank" rel="noopener noreferrer">
		{title}
	</a>
)

export default ExternLink
