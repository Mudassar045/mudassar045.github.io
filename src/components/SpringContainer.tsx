import React from 'react'

import { Spring } from 'react-spring/renderprops'

type PropsType = {
	children: React.ReactNode
	styles?: string
}

const SpringContainer: React.FC<PropsType> = ({ children, styles }) => {
	return (
		<Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
			{props => (
				<div style={{ ...props }} className={styles}>
					{children}
				</div>
			)}
		</Spring>
	)
}

export default SpringContainer
