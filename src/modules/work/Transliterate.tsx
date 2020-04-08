import React, { useState } from 'react'
import Layout from 'layout/Layout'
import transliterate from '@sindresorhus/transliterate'
const Transliterate = () => {

	const [output, setOuput] = useState("")
	const [copyButtonText, setCopyButtonText] = useState("Copy to Clipboard")

	const doTransliterate = (input: string): void => {

		if (input.trim().length === 0) {
			return
		}

		const transliteratedText = transliterate(input)
		setOuput(transliteratedText)
	}

	const copyToClipboard = () => {

		// copying the output
		navigator.clipboard.writeText(output)

		// changing the text
		setCopyButtonText("Copied!")

		// reverting the button text
		setTimeout(() => {
			setCopyButtonText("Copy to Clipboard")
		}, 1500);

	}

	return (
		<Layout>
			<section className="hero">
				<div className="hero-body">
					<div className="container">
						<div className="columns is-vcentered is-centered">
							<div className="column is-half is-narrow content">
								<h3>Transliteration</h3>
								<p>An example of <a href="https://en.wikipedia.org/wiki/Transliteration" rel="noopener noreferrer" target="_blank">Transliteration</a>
									&nbsp;with <a href="https://github.com/sindresorhus/transliterate" rel="noopener noreferrer" target="_blank">Transliterate</a>.
									&nbsp;Convert Unicode characters to Latin characters using transliteration</p>
								<div className="box">
									<input className="input" placeholder="Enter in any language e.g. Urdu" onChange={(e) => doTransliterate(e.target.value)} />
									<textarea className="textarea" style={{ marginTop: 10 }} placeholder="Output will be shown here" value={output} readOnly />
									<p className="has-text-right" style={{ marginTop: 10 }}>
										<button className="button is-primary is-small is-primary" disabled={output.length === 0 || copyButtonText === "Copied!" ? true : false} onClick={() => copyToClipboard()}>{copyButtonText}</button>
									</p>
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