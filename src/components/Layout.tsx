import { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';
import Header from './layout/Header';
import Footer from './layout/Footer';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          className: 'hotToastEnter',
          style: {
            padding: '16px',
          },
        }}
      />
      <Header />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
