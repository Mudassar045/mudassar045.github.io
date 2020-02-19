import React, { useState } from 'react'
import Layout from 'layout/Layout'
import transliterate from '@sindresorhus/transliterate'
const Transliterate = () => {

	const [output, setOuput] = useState("")

	const doTransliterate = (input: string) => {
		const transliterated_text = transliterate(input)
		setOuput(transliterated_text)
	}

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
									<input className="input" placeholder="Enter in any language e.g. Urdu" onChange={(e) => doTransliterate(e.target.value)} />
									<textarea id={"output"} style={{ marginTop: 10 }} placeholder="Output will be shown here" value={output} className="textarea" />
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