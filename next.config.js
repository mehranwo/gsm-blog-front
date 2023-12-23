/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "localhost",
      "strapi.garamaleki.ir",
      "minio.garamaleki.ir",
      "strapi.garamaleki.irundefined",
      "s3.gsm.ir"
    ],
  },
}

module.exports = nextConfig
