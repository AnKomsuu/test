import { useTranslation } from 'react-i18next';

interface LanguageSwitcherProps {
  isScrolled?: boolean;
}

const LanguageSwitcher = ({ isScrolled = true }: LanguageSwitcherProps) => {
  const { i18n } = useTranslation();

  const handleLanguageChange = () => {
    const newLang = i18n.language === 'ru' ? 'en' : 'ru';
    i18n.changeLanguage(newLang);
  };

  const buttonClass = isScrolled
    ? 'px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600'
    : 'px-3 py-2 text-sm font-medium text-white bg-gray-700 rounded-md hover:bg-gray-600';

  return (
    <button
      onClick={handleLanguageChange}
      className={buttonClass}
    >
      {i18n.language.toUpperCase()}
    </button>
  );
};

export default LanguageSwitcher;
