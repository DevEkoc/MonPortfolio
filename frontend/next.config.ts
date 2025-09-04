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
        deviceSizes: [640, 750, 828, 1080, 1200, 1920],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        minimumCacheTTL: 31536000, // 1 an
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
    
    // Optimisations expérimentales
    experimental: {
        scrollRestoration: true,
        optimizePackageImports: ['framer-motion', 'react-google-recaptcha', 'emailjs-com'],
    },
    
    // Compression et optimisation
    productionBrowserSourceMaps: false,
    
    // Configuration du compilateur
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },
    
    // Optimisation des chunks
    webpack: (config, { dev, isServer }) => {
        if (!dev && !isServer) {
            config.optimization.splitChunks = {
                ...config.optimization.splitChunks,
                cacheGroups: {
                    ...config.optimization.splitChunks.cacheGroups,
                    framerMotion: {
                        name: 'framer-motion',
                        test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
                        chunks: 'all',
                        priority: 30,
                        enforce: true,
                    },
                    animations: {
                        name: 'animations',
                        test: /[\\/]src[\\/]lib[\\/]animations/,
                        chunks: 'all',
                        priority: 20,
                        enforce: true,
                    },
                },
            };
        }
        return config;
    },
};

export default withBundleAnalyzer(nextConfig);
