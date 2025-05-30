import { useState } from 'react';
import type { Product } from '../store/catalogSlice';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { t } = useTranslation();
  const [isRequesting, setIsRequesting] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const handlePriceRequest = async () => {
    setIsRequesting(true);
    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID || '',
        process.env.REACT_APP_EMAILJS_PRICE_TEMPLATE_ID || '',
        {
          to_email: 'achynaliev@gmail.com',
          product_name: product.name,
          product_id: product.id,
          request_type: 'price_request',
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY || ''
      );

      toast.success(t('notifications.priceRequest.success'));
    } catch (error) {
      toast.error(t('notifications.priceRequest.error'));
      console.error('EmailJS error:', error);
    } finally {
      setIsRequesting(false);
    }
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoading(false);
  };

  return (
    <div className="flex flex-col h-full bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative w-full pt-[75%]"> {/* 4:3 aspect ratio */}
        {imageLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
          </div>
        )}
        <img
          src={imageError ? 'https://via.placeholder.com/400x300?text=No+Image' : product.image}
          alt={product.name}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 ${
            imageLoading ? 'opacity-0' : 'opacity-100'
          }`}
          onLoad={handleImageLoad}
          onError={handleImageError}
          loading="lazy"
        />
      </div>
      <div className="flex flex-col flex-grow p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500 mb-4 flex-grow line-clamp-3">
          {product.description}
        </p>
        <button
          className={`w-full py-2.5 px-4 rounded-md transition-colors ${
            isRequesting
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-primary-600 hover:bg-primary-700 text-white'
          }`}
          onClick={handlePriceRequest}
          disabled={isRequesting}
        >
          {isRequesting ? t('catalog.requestingPrice') : t('catalog.requestPrice')}
        </button>
      </div>
    </div>
  );
};

export default ProductCard; 