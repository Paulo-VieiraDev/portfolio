// next.config.ts

const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'avatars.githubusercontent.com' },
    ],
  },
  reactStrictMode: true
}

export default nextConfig