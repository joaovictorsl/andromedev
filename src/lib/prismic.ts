import Prismic from '@prismicio/client'

const apiEndpoint = 'https://andromedev-opendevufcg.cdn.prismic.io/api/v2'

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
