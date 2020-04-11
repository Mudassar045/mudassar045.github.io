import React from 'react'

import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

import Layout from 'layout/Layout'

function renderTooltip(props: any) {
	return (
		<Tooltip id="button-tooltip" {...props}>
			Simple tooltip
		</Tooltip>
	);
}

const OverlayTriggerExample = () => {

	const buttons = ["BTN 1", "BTN 2", "BTN 3"]
	const placements = ["bottom", "top", "right"]

	return <Layout>
		<section className="hero">
			<div className="hero-body">
				<div className="container">
					<div className="columns is-vcentered is-centered">
						<div className="column is-9 content">
							<h1>React OverlayTrigger</h1>
							<div className="columns">
								<div className="column is-mobile is-size-2 has-text-centered content">

									{
										buttons.map((btn: string, index: number) => (
											<OverlayTrigger
												key={btn}
												trigger="click"
												// @ts-ignore
												placement={placements[index]}
												rootClose
												delay={{ show: 200, hide: 100 }}
												overlay={renderTooltip}>
												<button className="button is-2 is-white has-background-primary is-primary" style={{ margin: 20 }}>{btn}</button>
											</OverlayTrigger>
										))
									}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</Layout>
}

export default OverlayTriggerExample