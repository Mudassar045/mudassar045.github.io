const AppWorkLinks: WorkLink[] = [
	{
		title: 'Image Gallery with React Motion',
		link: 'image-gallery'
	},
	{
		title: 'Transliteration Playground',
		link: 'transliterate'
	},
	{
		title: 'Simple Emoji Explorer',
		link: 'emoji-explorer'
	},
	{
		title: 'Character Counter',
		link: 'character-counter'
	},
	{
		title: 'Random Strings Generator',
		link: 'random-string-generator'
	},
	{
		title: 'Sample pdf generating React PDF Renderer',
		link: 'printing/sample-1',
		timestamp: '30-04-2020'
	},
	{
		title: 'SMS API Testing',
		link: 'sms-api-testing',
		timestamp: '16-05-2020'
	}
]

const ExternalWorkLinks: WorkLink[] = [
	{
		title: 'Easy Typescript Learning Cheatsheet',
		link: 'github.com/Mudassar045/typescript-cheatsheet'
	},
	{
		title: "Cond Construct, Inspired by Elixir's cond",
		link: 'github.com/Mudassar045/cond-construct#cond-construct'
	},
	{
		title: 'EcmaScript 6 Utilities',
		link: 'github.com/Mudassar045/ES6-Utils'
	}
]

type Params = 'app' | 'ext'

export const getWorkLinks = (type: Params) => {
	return type === 'app' ? AppWorkLinks : ExternalWorkLinks
}
