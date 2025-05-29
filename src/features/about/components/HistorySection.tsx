const HistorySection = () => {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            История компании
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Более 5 лет опыта в сфере упаковки для маркетплейсов
          </p>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <div className="prose prose-lg prose-primary">
            <p className="text-gray-500 mb-6">
              Наша компания начала свой путь в 2018 году как небольшая студия дизайна упаковки. 
              Мы быстро поняли, что рынок маркетплейсов нуждается в комплексных решениях: 
              от разработки концепции до производства и доставки готовой упаковки. Это понимание 
              определило наше дальнейшее развитие.
            </p>
            
            <p className="text-gray-500 mb-6">
              В 2020 году мы запустили собственное производство, что позволило нам контролировать 
              качество на всех этапах и предлагать клиентам оптимальные цены. За это время мы 
              реализовали более 1000 проектов для клиентов разного масштаба: от небольших брендов 
              до крупных торговых сетей.
            </p>

            <p className="text-gray-500">
              Сегодня мы — команда профессионалов, объединяющая дизайнеров, технологов и 
              специалистов по логистике. Наш опыт позволяет создавать упаковочные решения, 
              которые не только защищают товар и привлекают внимание покупателей, но и полностью 
              соответствуют требованиям маркетплейсов.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600">5+</div>
              <div className="mt-2 text-gray-500">лет опыта</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600">1000+</div>
              <div className="mt-2 text-gray-500">проектов</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600">100+</div>
              <div className="mt-2 text-gray-500">клиентов</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection; 