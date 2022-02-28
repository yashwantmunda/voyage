const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    poweredByHeader: false,
    assetPrefix: isProd ? 'https://vercel-voyage.b-cdn.net' : '',
  }
