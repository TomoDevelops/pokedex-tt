/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        // appDir: true,
        serverActions: true,
    },
    images: {
        unoptimized: true,
        domains: ["raw.githubusercontent.com", "i.ytimg.com", "yt3.ggpht.com"],
    },
};

module.exports = nextConfig;
