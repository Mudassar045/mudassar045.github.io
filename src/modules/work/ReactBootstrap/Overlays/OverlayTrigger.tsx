import React from 'react'
import Layout from 'layout/Layout'
import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

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
					<div className="columns is-vcentered is-centered is-text-centered">
						<div className="column is-9 content">
							<h1>React OverlayTrigger</h1>
							<div className="columns">
								{
									buttons.map((btn: string, i: number) => <OverlayTrigger
										key={btn}
										trigger="click"
										//@ts-ignore
										placement={placements[i]}
										rootClose
										delay={{ show: 200, hide: 100 }}
										overlay={renderTooltip}>
										<div className="column is-4 has-text-centered">
											<button className="button is-2 is-white has-background-primary is-primary">{btn}</button>
										</div>
									</OverlayTrigger>)
								}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</Layout>
}

export default OverlayTriggerExample