import type { LinkResolver } from '@prismicio/client/types/PreviewResolver'
import type { NextApiRequest, NextApiResponse } from 'next'

import { Client } from '../../lib/prismic'

const linkResolver: LinkResolver = (doc) => {
  if (doc.type === 'homepage') {
    return '/'
  }

  return '/'
}

const preview = async (req: NextApiRequest, res: NextApiResponse) => {
  const { token: ref, documentId } = req.query
  const redirectUrl = await Client(req)
    .getPreviewResolver(ref as string, documentId as string)
    .resolve(linkResolver, '/')

  if (!redirectUrl) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  res.setPreviewData({ ref })

  res.write(
    `<!DOCTYPE html><html><head><meta http-equiv="Refresh" content="0; url=${redirectUrl}" />
      <script>window.location.href = '${redirectUrl}'</script>
      </head>`
  )
  res.end()
}

export default preview
