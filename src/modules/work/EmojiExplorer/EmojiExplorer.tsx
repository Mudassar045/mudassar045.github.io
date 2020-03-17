import React, { useState } from 'react'
import Layout from 'layout/Layout'
import { getEmojis, filterEmoji } from 'modules/work/EmojiExplorer/EmojiList'
import { spring, TransitionMotion, presets } from 'react-motion'

const EmojiExplorer = () => {

	const randomEmojis = getEmojis(50)
		.map((curr) => {
			return {
				key: curr.title,
				data: curr
			}
		})
	const [emojis, setEmojis] = useState(randomEmojis)

	const onChangeInput = (searchText: string) => {

		const filteredEmojis = filterEmoji(searchText, 50)
			.map((curr) => {
				return {
					key: curr.title,
					data: curr
				}
			})
		setEmojis(filteredEmojis)
	}

	const emojiImageSrc = (symbol: any): string => {
		const codePointHex = symbol.codePointAt(0).toString(16)
		const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`

		return src
	}

	// actual animation-related logic
	const getDefaultStyles = () => {
		return emojis.map(emoji => ({ ...emoji, style: { height: 0, opacity: 1 } }))
	}

	const getStyles = () => {
		return emojis.map(emoji => {
			return {
				...emoji,
				style: {
					height: spring(60, presets.gentle),
					opacity: spring(1, presets.gentle),
				}
			}
		})
	}

	const willEnter = (): any => {
		return {
			height: 0,
			opacity: 1,
		}
	}

	const willLeave = (): any => {
		return {
			height: spring(0),
			opacity: spring(0),
		}
	}

	return (
		<Layout>
			<section className="hero">
				<div className="hero-body">
					<div className="container">
						<div className="columns is-vcentered is-centered is-text-centered">
							<div className="column is-two-thirds content">
								<h3>Emoji Explorer - Find Emoji</h3>
								<div className="box">
									<input className="input" placeholder="Paste Emoji or Search e.g. Smile" onChange={(e) => onChangeInput(e.target.value)} />
									<table className="table" style={{ marginTop: 10 }}>
										<TransitionMotion
											styles={getStyles()}
											defaultStyles={getDefaultStyles()}
											willEnter={willEnter}
											willLeave={willLeave}>
											{
												styles =>
													<tbody>
														{
															styles.map(({ key, style, data: { symbol, title, keywords } }) => <tr key={key} style={style}>
																<td>
																	<div>
																		<figure>
																			<img src={emojiImageSrc(symbol)} height={24} width={24} alt={title} />
																		</figure>
																		<h3 className="title is-capitalized">{title}</h3>
																		<p className="subtitle is-6">{keywords.split(' ').join(', ').toString()}</p>
																	</div>
																</td>
															</tr>)
														}
													</tbody>
											}
										</TransitionMotion>
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