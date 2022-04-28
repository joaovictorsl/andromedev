import Prismic from '@prismicio/client'

const apiEndpoint = 'https://andromedev-opendevufcg.cdn.prismic.io/api/v2'

export interface TreatedLink {
  target: string
  url: string
}

export const getRouteFromLink = (link: PrismicLink) => {
  if (link.link_type === 'Web')
    return { target: link.target ?? '_self', url: link.url }
  else if (link.link_type === 'Document') {
    switch (link.type) {
      case 'homepage':
        return { target: '_self', url: '/' }
      case 'about_page':
        return { target: '_self', url: '/about' }
      case 'common_page':
        return { target: '_self', url: `/guide/${link.uid}` }
    }
  }
  return { target: '_self', url: `/` }
}

const createClientOptions = (req?: unknown, prismicAccessToken?: string) => {
  const reqOption = req ? { req } : {}
  const accessTokenOption = prismicAccessToken
    ? { accessToken: prismicAccessToken }
    : {}

  return {
    ...reqOption,
    ...accessTokenOption,
  }
}

export const Client = (req?: unknown) =>
  Prismic.client(
    apiEndpoint,
    createClientOptions(req, process.env.PRISMIC_ACCESS_TOKEN)
  )
