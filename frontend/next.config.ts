import type { NextConfig } from 'next';

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true'
});

const nextConfig: NextConfig = {
    // Optimisations pour les performances
    compress: true,
    poweredByHeader: false,
    
    // Configuration des images optimisée
    images: {
        formats: ['image/webp', 'image/avif'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
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
        ],
    },
    
    // Optimisation experimental
    experimental: {
        scrollRestoration: true,
    },
    
    // Compression et optimisation
    productionBrowserSourceMaps: false,
    allowedDevOrigins: ['*'],
};

export default withBundleAnalyzer(nextConfig);
