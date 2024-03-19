/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
  },
  images: {
    domains: ["lh3.googleusercontent.com", "firebasestorage.googleapis.com"]
  }
}

module.exports = nextConfig