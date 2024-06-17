/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  compiler: {
    styledComponents: true,
  },
  async redirects() {
    return [
      {
        source: '/privacy',
        destination: 'https://telegra.ph/Vibely--Privacy-Policy-06-17',
        permanent: false,
        basePath: false,
      },
      {
        source: '/terms',
        destination: 'https://telegra.ph/Vibely--Terms-of-Services-06-17',
        permanent: false,
        basePath: false,
      },
      {
        source: '/cookies',
        destination: 'https://telegra.ph/Vibely--Cookie-Policy-06-17',
        permanent: false,
        basePath: false,
      },
    ];
  },
};

module.exports = nextConfig;
