import React from 'react'
import Layout from 'layout/Layout'

const Transliterate = () => {

	return (
		<Layout>
			<section className="hero">
				<div className="hero-body">
					<div className="container">
						<div className="columns is-vcentered is-centered is-text-centered">
							<div className="column is-half is-narrow content">
								<h3>Transliteration</h3>
								<p>An example of <a href="https://en.wikipedia.org/wiki/Transliteration" rel="noopener noreferrer" target="_blank">Transliteration</a> with <a href="https://github.com/sindresorhus/transliterate" rel="noopener noreferrer" target="_blank">Transliterate</a>. Convert Unicode characters to Latin characters using transliteration</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	)
}

export default Transliterate