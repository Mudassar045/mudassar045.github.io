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
    menuLinks: MenuLink []
    themeColor: string
    backgroundColor: string
}
  
interface MenuLink {
    name: string
    link: string
}
  