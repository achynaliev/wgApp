import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const GallerySection = () => {
  const { t } = useTranslation();
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      alt: t('home.gallery.items.0.alt'),
      title: t('home.gallery.items.0.title'),
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      alt: t('home.gallery.items.1.alt'),
      title: t('home.gallery.items.1.title'),
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      alt: t('home.gallery.items.2.alt'),
      title: t('home.gallery.items.2.title'),
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      alt: t('home.gallery.items.3.alt'),
      title: t('home.gallery.items.3.title'),
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      alt: t('home.gallery.items.4.alt'),
      title: t('home.gallery.items.4.title'),
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      alt: t('home.gallery.items.5.alt'),
      title: t('home.gallery.items.5.title'),
    },
  ];

  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t('home.gallery.title')}
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            {t('home.gallery.subtitle')}
          </p>
        </div>

        <div className="mt-12">
          {/* Large Image Preview */}
          <div className="relative aspect-w-16 aspect-h-9 mb-8">
            <img
              src={images[currentImage].src}
              alt={images[currentImage].alt}
              className="object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg flex items-end">
              <div className="p-6 text-white">
                <h3 className="text-xl font-semibold">{images[currentImage].title}</h3>
              </div>
            </div>
          </div>

          {/* Thumbnails Grid */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {images.map((image, index) => (
              <button
                key={image.id}
                onClick={() => setCurrentImage(index)}
                className={`relative aspect-w-1 aspect-h-1 rounded-lg overflow-hidden ${
                  currentImage === index ? 'ring-2 ring-primary-500' : ''
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="object-cover w-full h-full"
                />
                <div className={`absolute inset-0 bg-black/20 ${
                  currentImage === index ? 'bg-opacity-0' : ''
                }`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection; 