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
								<p>An example of <a href="https://en.wikipedia.org/wiki/Transliteration" rel="noopener noreferrer" target="_blank">Transliteration</a>
									&nbsp;with <a href="https://github.com/sindresorhus/transliterate" rel="noopener noreferrer" target="_blank">Transliterate</a>.
									&nbsp;Convert Unicode characters to Latin characters using transliteration</p>
								<div className="box">
									<input className="input" placeholder="Enter in any language e.g. Urdu" />
									<p className="has-text-right" style={{ marginTop: 10 }}>
										<button className="button is-primary is-small is-primary">Transliterate</button>
									</p>
									<textarea placeholder="Output will be shown here" className="textarea" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	)
}

export default Transliterate