/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/bslit_website',
  assetPrefix: '/bslit_website',
  env: {
    NEXT_PUBLIC_BASE_PATH: '/bslit_website',
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
