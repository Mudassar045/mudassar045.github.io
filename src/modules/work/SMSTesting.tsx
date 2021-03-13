import React, { useState } from 'react'
import Layout from 'layout/Layout'

const SMSTesting = () => {
	const [text, setText] = useState('')
	const [phone, setPhone] = useState('')
	const [username, setUsername] = useState('')
	const [password, setPasssword] = useState('')

	const sendSMS = async () => {
		console.log('in')

		try {
			const apiURL = `http://api.bizsms.pk/api-send-branded-sms.aspx?username=${username}&pass=${password}&text=${text}&masking=Demo&destinationnum=${phone}&language=English`

			const response = await fetch(apiURL)

			const data = await response.json()
			alert(data)
		} catch (error) {
			console.log("there's is something happening on server side")
		}
	}

	return (
		<Layout>
			<section className="hero">
				<div className="hero-body">
					<div className="container">
						<div className="columns is-vcentered is-centered">
							<div className="column is-half is-narrow content">
								<h3>SMS API Testing</h3>
								<p>Testing sms API for mischool.pk</p>
								<div className="box">
									<input
										type="text"
										className="input"
										placeholder="Enter username/email/id"
										onChange={e => setUsername(e.target.value)}
									/>
									<input
										type="password"
										className="input"
										style={{ marginTop: 10 }}
										placeholder="Enter password/access token"
										onChange={e => setPasssword(e.target.value)}
									/>
									<textarea
										className="textarea"
										style={{ marginTop: 10 }}
										placeholder="Enter SMS here"
										onChange={e => setText(e.target.value)}
									/>
									<input
										type="text"
										className="input"
										style={{ marginTop: 10 }}
										placeholder="Enter Destination Phone"
										onChange={e => setPhone(e.target.value)}
									/>
									<p className="has-text-right" style={{ marginTop: 10 }}>
										<button className="button is-primary is-small is-primary" onClick={sendSMS}>
											Send SMS
										</button>
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

export default SMSTesting
