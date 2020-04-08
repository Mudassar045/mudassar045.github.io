import React, { Component } from 'react'
import { Motion, spring } from 'react-motion'
import Layout from 'layout/Layout'

const springSettings = { stiffness: 150, damping: 20 }
const NEXT = 'show-next'

interface S {
	images: []
	currImage: []
}

class ImageGallery extends Component {

	state = {
		images: [[240, 280], [240, 280], [240, 280], [240, 280], [240, 280], [240, 280], [240, 280]],
		currIamge: 0
	}

	//@ts-ignore
	handleChange = ({ target: { value } }) => {
		this.setState({ currIamge: value })
	}

	clickHandler = (btn: string) => {
		let photoIndex = btn === NEXT ? this.state.currIamge + 1 : this.state.currIamge - 1

		photoIndex = photoIndex >= this.state.images.length ? 0 : photoIndex
		photoIndex = photoIndex >= 0 ? photoIndex : this.state.images.length - 1

		this.setState({
			currIamge: photoIndex
		})
	}

	render() {

		const { images, currIamge } = this.state
		const [currWidth, currHeight] = images[currIamge]

		const widths = images.map(([origW, origH]) => currHeight / origH * origW)

		const leftStartCoords = widths
			.slice(0, currIamge)
			.reduce((sum, width) => sum - width, 0)

		let configs: any = []
		images.reduce((prevLeft, [origW, origH], i) => {
			configs.push({
				left: spring(prevLeft, springSettings),
				height: spring(currHeight, springSettings),
				width: spring(widths[i], springSettings),
			})
			return prevLeft + widths[i]
		}, leftStartCoords)

		return (
			<Layout>
				<section className="hero">
					<div className="hero-body">
						<div className="container">
							<div className="columns is-vcentered is-centered">
								<div className="column is-half is-narrow content">
									<h3>Image Gallery</h3>
									<p> <a href="https://github.com/chenglou/react-motion" target="_blank" rel="noopener noreferrer">React Motion</a> is open-source library that solves animation problems.</p>
									<div className="box" style={{ marginTop: 10 }}>
										<Motion style={{ height: spring(currHeight), width: spring(currWidth - 20) }}>
											{container =>
												<div className="image-gallery-inner" style={container}>
													{configs.map((style: any, i: number) =>
														<Motion key={i} style={style}>
															{style =>
																<figure>
																	<img className="image-gallery-item" src={`image-gallery/${i}.jpeg`} style={style} alt="any-profile" />
																</figure>
															}
														</Motion>
													)}
												</div>
											}
										</Motion>
										<div style={{ display: "flex", marginTop: 10, flexDirection: "row" }}>
											<button className="button is-primary" onClick={() => this.clickHandler('null')}>⟵</button>
											<input
												style={{ width: "55%", margin: "auto" }}
												type="range"
												min={0}
												max={images.length - 1}
												value={currIamge}
												onChange={this.handleChange} />
											<button className="button is-primary" onClick={this.clickHandler.bind(null, NEXT)}>⟶</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</Layout>
		)
	}
}

export default ImageGallery