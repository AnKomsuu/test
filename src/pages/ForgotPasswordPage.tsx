import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { findUserByEmail, findUserByPhone } from '../api/userAPI';

type RecoveryMethod = 'email' | 'phone';

function ForgotPasswordPage() {
  const { t } = useTranslation();
  const [recoveryMethod, setRecoveryMethod] = useState<RecoveryMethod>('email');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleRecoveryAttempt = async (identifier: string, method: RecoveryMethod) => {
    setIsLoading(true);
    setMessage(null);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      let user;
      if (method === 'email') {
        user = findUserByEmail(identifier);
      } else {
        user = findUserByPhone(identifier);
      }

      if (user) {
        setMessage({
          type: 'success',
          text: method === 'email' 
            ? 'Recovery instructions have been sent to your email address.'
            : 'Recovery instructions have been sent via SMS to your phone number.'
        });
        
        if (method === 'email') {
          setEmail('');
        } else {
          setPhone('');
        }
      } else {
        setMessage({
          type: 'error',
          text: method === 'email'
            ? 'No user found with this email address.'
            : 'No user found with this phone number.'
        });
      }
    } catch (error) {
      setMessage({
        type: 'error',
        text: 'An error occurred. Please try again.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (recoveryMethod === 'email') {
      if (!email) {
        setMessage({ type: 'error', text: 'Please enter your email address.' });
        return;
      }
      
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setMessage({ type: 'error', text: 'Please enter a valid email address.' });
        return;
      }
      
      handleRecoveryAttempt(email, 'email');
    } else {
      if (!phone) {
        setMessage({ type: 'error', text: 'Please enter your phone number.' });
        return;
      }
      
      const phoneRegex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
      if (!phoneRegex.test(phone)) {
        setMessage({ type: 'error', text: 'Please enter a valid phone number in format: +7 (XXX) XXX-XX-XX' });
        return;
      }
      
      handleRecoveryAttempt(phone, 'phone');
    }
  };

  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    
    if (numbers.length === 0) return '';
    if (numbers.length <= 1) return `+${numbers}`;
    if (numbers.length <= 4) return `+${numbers[0]} (${numbers.slice(1)}`;
    if (numbers.length <= 7) return `+${numbers[0]} (${numbers.slice(1, 4)}) ${numbers.slice(4)}`;
    if (numbers.length <= 9) return `+${numbers[0]} (${numbers.slice(1, 4)}) ${numbers.slice(4, 7)}-${numbers.slice(7)}`;
    return `+${numbers[0]} (${numbers.slice(1, 4)}) ${numbers.slice(4, 7)}-${numbers.slice(7, 9)}-${numbers.slice(9, 11)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhone(formatted);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-2 text-gray-800 dark:text-gray-100">
            {t('forgot_password.title', 'Forgot Password')}
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
            {t('forgot_password.subtitle', 'Choose a recovery method to reset your password')}
          </p>

          {message && (
            <div className={`mb-4 p-3 rounded border ${
              message.type === 'success'
                ? 'bg-green-100 dark:bg-green-900/30 border-green-400 dark:border-green-700 text-green-700 dark:text-green-400'
                : 'bg-red-100 dark:bg-red-900/30 border-red-400 dark:border-red-700 text-red-700 dark:text-red-400'
            }`}>
              {message.text}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {recoveryMethod === 'email' ? (
              <>
                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                  >
                    {t('forgot_password.email_label', 'Email Address')}
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    placeholder={t('forgot_password.email_placeholder', 'Enter your email address')}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? t('forgot_password.sending', 'Sending...') : t('forgot_password.recover_via_email', 'Recover via Email')}
                </button>

                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => {
                      setRecoveryMethod('phone');
                      setMessage(null);
                    }}
                    className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {t('forgot_password.use_phone', 'Use phone number instead')}
                  </button>
                </div>
              </>
            ) : (
              <>
                <div>
                  <label 
                    htmlFor="phone" 
                    className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                  >
                    {t('forgot_password.phone_label', 'Phone Number')}
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={handlePhoneChange}
                    maxLength={18}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    placeholder="+7 (XXX) XXX-XX-XX"
                  />
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    {t('forgot_password.phone_format', 'Format: +7 (XXX) XXX-XX-XX')}
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? t('forgot_password.sending', 'Sending...') : t('forgot_password.recover_via_phone', 'Recover via Phone')}
                </button>

                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => {
                      setRecoveryMethod('email');
                      setMessage(null);
                    }}
                    className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {t('forgot_password.use_email', 'Use email instead')}
                  </button>
                </div>
              </>
            )}
          </form>

          <div className="mt-6 text-center space-y-3">
            <div>
              <Link 
                to="/login" 
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                ← {t('forgot_password.back_to_login', 'Back to Login')}
              </Link>
            </div>
            <div>
              <Link 
                to="/" 
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                ← {t('forgot_password.to_home', 'To Home')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
