import { serverQueryContent } from '#content/server'
import { SitemapStream, streamToPromise } from 'sitemap'
import dataJson from '../../apps/conseils/pages/conseils/posts.json'
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
  for (let i = 1; i < 100; i++) {
    const slug = dataJson.posts[i].slug
    docs.push({
        _path: `/conseils/posts/${slug}`
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
