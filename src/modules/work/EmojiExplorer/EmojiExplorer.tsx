import React, { useState } from 'react'
import Layout from 'layout/Layout'
import { getEmojis, filterEmoji } from 'modules/work/EmojiExplorer/EmojiList'

const EmojiExplorer = () => {

	const random_emojis = getEmojis(50)
	const [emojis, setEmojis] = useState(random_emojis)

	const onChangeInput = (searchText: string) => {
		setEmojis(filterEmoji(searchText, 50))
	}

	const emojiImageSrc = (symbol: any): string => {
		const codePointHex = symbol.codePointAt(0).toString(16)
		const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`

		return src
	}

	return (
		<Layout>
			<section className="hero">
				<div className="hero-body">
					<div className="container">
						<div className="columns is-vcentered is-centered is-text-centered">
							<div className="column content">
								<h3>Emoji Explorer - Find Emoji</h3>
								<p></p>
								<div className="box">
									<input className="input" placeholder="Paste Emoji or Search e.g. Smile" onChange={(e) => onChangeInput(e.target.value)} />
									<table className="table" style={{ marginTop: 10 }}>
										<tbody>
											{
												emojis
													.sort((a, b) => a.title.localeCompare(b.title))
													.map(emoji => <tr key={emoji.title}>
														<td>
															<div>
																<figure>
																	<img src={emojiImageSrc(emoji.symbol)} height={24} width={24} alt={emoji.title} />
																</figure>
																<h3 className="title is-capitalized">{emoji.title}</h3>
																<p className="subtitle is-6">{emoji.keywords.split(' ').join(', ').toString()}</p>
															</div>
														</td>
													</tr>)
											}
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	)
}

export default EmojiExplorer