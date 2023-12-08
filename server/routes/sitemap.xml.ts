import { serverQueryContent } from '#content/server'
import { SitemapStream, streamToPromise } from 'sitemap'

export default defineEventHandler(async (event) => {
  // Fetch all documents
  const docs = [
    {
        _path: '/'
    },
    {
        _path: '/contact'
    },
    {
        _path: '/conseils'
    }
]
  const sitemap = new SitemapStream({
    hostname: 'https://chefontime.tech/'
    //hostname: 'http://localhost:3000/'
  })
  for (let i = 1; i < 31; i++) {
    docs.push({
        _path: `/conseils/posts/${i}`
    })
  }
  for (const doc of docs) {
    sitemap.write({
      url: doc._path,
      changefreq: 'daily'
    })
  }
  sitemap.end()

  return streamToPromise(sitemap)
})
