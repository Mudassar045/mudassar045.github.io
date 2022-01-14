const config: Config = {
	siteTitle: 'Mudassar Ali',
	siteTitleShort: 'Mudassar Ali',
	siteTitleAlt: 'Mudassar',
	siteLogo: '/logos/logo-1024.png',
	siteUrl: 'https://mudssrali.com',
	repo: 'https://github.com/mudssrali/mudssrali.com',
	pathPrefix: '',
	dateFromFormat: '',
	dateFormat: '',
	siteDescription:
		'Mudassar Ali is a full-stack Software Developer currently working with JavaScript and Elixir, changing imaginations into reality through code. Most important, Love OSS',
	whoAm: 'A full-stack Software Developer & OSS Junkie',
	homeDescription:
		'I design and build software with and for the people, with keen interest in design & user experience',
	siteRss: '/rss.xml',
	googleAnalyticsID: '',
	postDefaultCategoryID: 'Tech',
	newsletter: 'https://mudassarali.substack.com',
	newsletterEmbed: 'https://mudassarali.substack.com/embed',
	userName: 'Mudassar Ali',
	userEmail: 'mudassarali.vwd@gmail.com',
	userTwitter: 'https://twitter.com/mudssrali',
	userGitHub: 'https://github.com/mudssrali',
	userStackOverflow: 'https://stackoverflow.com/users/8108770/mudassar',
	userLinkedIn: 'https://www.linkedin.com/in/mudssrali/',
	userFacebook: 'https://web.facebook.com/mudssrali',
	resume: 'https://mudssrali.keybase.pub/mudassar-resume.pdf',
	userInstagram: 'https://www.instagram.com/mudssr.ali',
	blog: 'https://mudssrali.com/blog',
	menuLinks: [
		{
			name: 'Home',
			link: '/me'
		},
		{
			name: 'About',
			link: '/about'
		},
		{
			name: 'Works',
			link: '/works'
		},
		{
			name: 'Projects',
			link: '/projects'
		},
		{
			name: 'Contact',
			link: '/contact'
		},
		{
			name: 'Blog',
			link: '/blog'
		}
	],
	themeColor: '#3F80FF', // Used for setting manifest and progress theme colors.
	backgroundColor: '#ffffff'
}

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
	config.pathPrefix = ''
} else {
	// Make sure pathPrefix only contains the first forward slash
	config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/') config.siteUrl = config.siteUrl.slice(0, -1)

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/') config.siteRss = `/${config.siteRss}`

export default config
