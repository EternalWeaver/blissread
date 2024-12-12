/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['picsum.photos'], // Add this line to allow loading images from picsum.photos
  },
}

module.exports = nextConfig