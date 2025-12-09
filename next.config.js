/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/test-portfolio',
    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig;
