import React from 'react'
import Layout from 'layout/Layout'

const CharacterCounter = () => {
	return <Layout>
		<section className="hero">
			<div className="hero-body">
				<div className="container">
					<div className="columns is-vcentered is-centered is-text-centered">
						<div className="column is-half is-narrow content">
							<h3>Character Counter</h3>
							<p>Just playing with React useState() and with JS data structures</p>
							<textarea className="textarea" style={{ marginTop: 10 }} placeholder="Start writing here..." />
							<div className="box" style={{ marginTop: 10 }}>

							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</Layout>
}

export default CharacterCounter