const AppWorkLinks: WorkLink[] = [
	{
		title: "Image Gallery with React Motion",
		link: "image-gallery"
	},
	{
		title: "Transliteration Playground",
		link: "transliterate"
	},
	{
		title: "Simple Emoji Explorer",
		link: "emoji-explorer"
	},
	{
		title: "Character Counter",
		link: "character-counter"
	},
	{
		title: "Random Strings Generator",
		link: "random-string-generator"
	},
	{
		title: "Learning D3",
		link: "d3-learning"
	},
	{
		title: "Sample-1: Generating and Downloading Document using React PDF Renderer",
		link: "printing/sample-1"
	}
]

const ExternalWorkLinks: WorkLink[] = [
	{
		title: "Easy Typescript Learning Cheatsheet",
		link: "https://github.com/Mudassar045/typescript-cheatsheet"
	}
]

type Params = "app" | "ext"

export const getWorkLinks = (type: Params) => {
	return type === "app" ? AppWorkLinks : ExternalWorkLinks
}