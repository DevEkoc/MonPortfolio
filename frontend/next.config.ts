import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '127.0.0.1',
                port: '8000',
                pathname: '/media/**',
            },
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '8000',
                pathname: '/media/**',
            },
            // {
            //     protocol: 'http',
            //     hostname: '192.168.100.115',
            //     port: '8000',
            //     pathname: '/media/**',
            // },
            // {
            //     protocol: 'http',
            //     hostname: '192.168.137.1',
            //     port: '8000',
            //     pathname: '/media/**',
            // },
        ],
    },
    allowedDevOrigins: ['*'],
};

export default nextConfig;
