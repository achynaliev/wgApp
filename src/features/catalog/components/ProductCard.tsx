import { useState } from 'react';
import type { Product } from '../store/catalogSlice';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isRequesting, setIsRequesting] = useState(false);
  const [imageError, setImageError] = useState(false);

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

      toast.success('Запрос цены отправлен успешно! Мы свяжемся с вами в ближайшее время.');
    } catch (error) {
      toast.error('Произошла ошибка при отправке запроса.');
      console.error('EmailJS error:', error);
    } finally {
      setIsRequesting(false);
    }
  };

  const fallbackImage = 'https://via.placeholder.com/400x533?text=Изображение+недоступно';

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="aspect-w-3 aspect-h-4 relative">
        <img
          src={imageError ? fallbackImage : product.image}
          alt={product.name}
          className="object-cover w-full h-full"
          onError={() => setImageError(true)}
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500 mb-4">
          {product.description}
        </p>
        <button
          className={`w-full py-2 px-4 rounded-md transition-colors ${
            isRequesting
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-primary-600 hover:bg-primary-700 text-white'
          }`}
          onClick={handlePriceRequest}
          disabled={isRequesting}
        >
          {isRequesting ? 'Отправка запроса...' : 'Запросить цену'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard; 