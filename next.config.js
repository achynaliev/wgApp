/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'], // Разрешенные домены для изображений
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048], // Размеры для разных устройств
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Размеры для оптимизации
    formats: ['image/webp'], // Использовать WebP где возможно
  },
  // Оптимизация производительности
  swcMinify: true, // Использовать SWC для минификации
  reactStrictMode: true,
  poweredByHeader: false, // Убрать заголовок X-Powered-By
  compress: true, // Включить сжатие
  // Настройки сборки
  webpack: (config) => {
    // Оптимизация изображений
    config.module.rules.push({
      test: /\.(jpe?g|png|svg|gif|ico|webp|avif)$/i,
      use: [
        {
          loader: 'image-webpack-loader',
          options: {
            mozjpeg: {
              progressive: true,
              quality: 65,
            },
            optipng: {
              enabled: false,
            },
            pngquant: {
              quality: [0.65, 0.90],
              speed: 4,
            },
            gifsicle: {
              interlaced: false,
            },
            webp: {
              quality: 75,
            },
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig; 