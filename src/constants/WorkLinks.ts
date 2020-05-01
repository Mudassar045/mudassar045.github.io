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
	// {
	// 	title: "Learning D3",
	// 	link: "d3-learning"
	// },
	{
		title: "Sample Generating and Downloading document using React PDF Renderer",
		link: "printing/sample-1",
		timestamp: "30-04-2020"
	},
	{
		title: "Working on elixir like cond",
		link: "cond-construct",
		timestamp: "01-05-2020"
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