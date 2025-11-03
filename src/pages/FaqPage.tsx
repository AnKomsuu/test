import { useTranslation } from 'react-i18next';

function FaqPage() {
  const { t } = useTranslation();

  return (
    <div className="px-4 py-8 mx-auto max-w-4xl">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-8">
        {t('faq.title')}
      </h1>
      
      <div className="space-y-6">
        <section>
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
            {t('faq.shipping_question')}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {t('faq.shipping_answer')}
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
            {t('faq.return_question')}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {t('faq.return_answer')}
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
            {t('faq.warranty_question')}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {t('faq.warranty_answer')}
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
            {t('faq.tracking_question')}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {t('faq.tracking_answer')}
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
            {t('faq.payment_question')}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {t('faq.payment_answer')}
          </p>
        </section>
      </div>
    </div>
  );
}

export default FaqPage;
