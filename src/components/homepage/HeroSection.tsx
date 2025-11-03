import { useTranslation } from 'react-i18next';

function HeroSection() {
  const { t } = useTranslation();

  return (
    <div 
      className="relative w-full h-[400px] bg-cover bg-center"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/hero/1200/400)' }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            {t('h1_title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            {t('explore_our')}
          </p>
          <a
            href="#all-products"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-300 shadow-lg"
          >
            {t('explore_collection')}
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
