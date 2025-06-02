import React from 'react';
import { useTranslation } from 'react-i18next';

const AdvantagesSection = () => {
  const { t } = useTranslation();

  const advantages = [
    {
      id: 1,
      title: 'Широкий ассортимент',
      description: 'В постоянном доступе более 1000 вариантов флаконов и упаковок',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Полное сопровождение',
      description: 'Оформляем все необходимые декларации и документы',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Преимущества ЕАЭС',
      description: 'Состоим в ЕАЭС, что обеспечивает упрощенную логистику и отсутствие таможенных пошлин',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: 4,
      title: 'Премиальное сырье',
      description: 'Используем только лучшее сырье из Южной Кореи',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
    {
      id: 5,
      title: 'Разнообразие продукции',
      description: 'Производство более 50 видов уходовой косметики и органичных БАДов',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Преимущества заказа из Кыргызстана
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Оптимальное решение для вашего бизнеса
          </p>
        </div>

        {/* Map Section */}
        <div className="mt-12 bg-white rounded-lg shadow-sm p-6">
          <div className="aspect-w-16 aspect-h-9 relative">
            <img
              src="/images/central-asia-map.svg"
              alt="Карта Центральной Азии"
              className="w-full h-full object-contain"
            />
            {/* Trade Route Arrows - These would be SVG paths overlaid on the map */}
            <div className="absolute inset-0">
              {/* You would need to add actual SVG arrows here */}
            </div>
          </div>
        </div>

        {/* Advantages Grid */}
        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {advantages.map((advantage) => (
            <div
              key={advantage.id}
              className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    {advantage.icon}
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    {advantage.title}
                  </h3>
                </div>
              </div>
              <p className="mt-4 text-base text-gray-500">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection; 