import React, { useState } from 'react'
import Layout from 'layout/Layout'

const RandomStringGenerator = () => {

	let [stringCount, setStringCount] = useState(10)
	let [stringLength, setStringLength] = useState(10)
	let [outputStrings, setOutputStrings] = useState([""])

	let [toggleCode, setToggleCode] = useState(false)

	const generateStrings = (): void => {

		let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
		let charactersLength = characters.length

		let randomStringsArray: string[] = []

		for (let counter = 0; counter < Math.abs(stringCount); counter++) {
			let randomString = ''
			for (let i = 0; i < Math.abs(stringLength); i++) {
				randomString += characters.charAt(Math.floor(Math.random() * charactersLength))
			}
			randomStringsArray.push(randomString)
		}

		setOutputStrings(randomStringsArray)
	}

	//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString

	return <Layout>
		<section className="hero">
			<div className="hero-body">
				<div className="container">
					<div className="columns is-vcentered is-centered">
						<div className="column is-two-thirds content">
							<h3>Random String Generator</h3>
							<p>Generate random strings to play around with them.</p>
							<div className="box" style={{ marginTop: 10 }}>
								<div className="columns is-half-desktop">
									<div className="column">
										<p>How many strings?</p>
									</div>
									<div className="column is-one-third has-padding-2">
										<input type="number" className="input is-small is-hovered" placeholder="e.g. 10" onBlur={(e) => setStringCount(parseInt(e.target.value) || 10)} />
									</div>
								</div>
								<div className="columns is-half-desktop">
									<div className="column">
										<p>Strings of what length?</p>
									</div>
									<div className="column is-one-third has-padding-2">
										<input type="number" className="input is-small is-hovered" placeholder="e.g. 10" onBlur={(e) => setStringLength(parseInt(e.target.value) || 10)} />
									</div>
								</div>
								<div className="columns is-half-desktop">
									<div className="column has-text-right">
										<button className="button is- is-small has-background-info has-text-white-bis" onClick={() => generateStrings()}>Generate Strings</button>
									</div>
								</div>
								<textarea className="textarea is-primary is-medium" value={outputStrings} placeholder="copy strings from here..." />
							</div>
							<div className="box" style={{ marginTop: 10 }}>
								<button className="button is-danger is-fullwidth" onClick={() => setToggleCode(!toggleCode)}>Show Code</button>
								{
									toggleCode && <pre>
										<code className="language-javascript">
											Working on it...will add soon
										</code>
									</pre>
								}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</Layout>
}

export default RandomStringGenerator