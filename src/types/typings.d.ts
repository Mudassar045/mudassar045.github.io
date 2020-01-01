interface Config {
    siteTitle: string
    siteTitleShort: string
    siteTitleAlt: string
    siteLogo: string
    siteUrl: string
    repo: string
    pathPrefix: string
    dateFromFormat: string
    dateFormat: string
    siteDescription: string
    siteRss: string
    googleAnalyticsID: string
    postDefaultCategoryID: string
    newsletter: string
    newsletterEmbed: string
    userName: string
    userEmail: string
    userTwitter: string
    userGitHub: string
    userStackOverFlow: string
    userLinkedIn: string
    userFacebook: string
    userInstagram: string
    blog: string
    whoAm: string
    homeDescription: string
    menuLinks: MenuLink []
    themeColor: string
    backgroundColor: string
}
  
interface MenuLink {
    name: string
    link: string
}
  