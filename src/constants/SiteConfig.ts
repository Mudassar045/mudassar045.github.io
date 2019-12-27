const config = {
    siteTitle: 'Mudassar Ali',
    siteTitleShort: 'Mudassar Ali',
    siteTitleAlt: 'Mudassar Ali',
    siteLogo: '/logos/logo-1024.png',
    siteUrl: 'https://www.mudassarali.com',
    repo: 'https://github.com/mudassar045/mudassarali.com',
    pathPrefix: '',
    dateFromFormat: '',
    dateFormat: '',
    siteDescription:
      'Mudassar Ali is full-stack developer currently working with JavaScript and Elixir. Changing imaginations into reality through code. A bit Open-Sourcer',
    siteRss: '/rss.xml',
    googleAnalyticsID: '',
    postDefaultCategoryID: 'Tech',
    newsletter: 'https://mudassarali.substack.com',
    newsletterEmbed: 'https://mudassarali.substack.com/embed',
    userName: 'MudassarAli',
    userEmail: 'mudassar@mudassarali.com',
    userTwitter: 'voidwebdev',
    githubUrl: 'https://github.com/mudassar045',
    blog: 'https://blog.mudassarali.com',
    menuLinks: [
      {
        name: 'Home',
        link: '/me/',
      },
      {
        name: 'Projects',
        link: '/projects/',
      },
      {
        name: 'About',
        link: '/about/',
      },
      {
        name: 'Contact',
        link: '/contact/',
      },
      {
        name: 'Articles',
        link: '/articles/',
      },
    ],
    themeColor: '#3F80FF', // Used for setting manifest and progress theme colors.
    backgroundColor: '#ffffff',
  } as Config
  
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
  