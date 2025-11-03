import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import FaqPage from './pages/FaqPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ProfilePage from './pages/ProfilePage';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <Layout>
            <HomePage />
          </Layout>
        } 
      />
      <Route 
        path="/product/:id" 
        element={
          <Layout>
            <ProductDetailPage />
          </Layout>
        } 
      />
      <Route 
        path="/cart" 
        element={
          <Layout>
            <CartPage />
          </Layout>
        } 
      />
      <Route 
        path="/checkout" 
        element={
          <ProtectedRoute>
            <Layout>
              <CheckoutPage />
            </Layout>
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/about" 
        element={
          <Layout>
            <AboutPage />
          </Layout>
        } 
      />
      <Route 
        path="/contact" 
        element={
          <Layout>
            <ContactPage />
          </Layout>
        } 
      />
      <Route 
        path="/faq" 
        element={
          <Layout>
            <FaqPage />
          </Layout>
        } 
      />
      <Route 
        path="/login" 
        element={<LoginPage />} 
      />
      <Route 
        path="/signup" 
        element={<SignUpPage />} 
      />
      <Route 
        path="/forgot-password" 
        element={<ForgotPasswordPage />} 
      />
      <Route 
        path="/profile" 
        element={
          <Layout>
            <ProfilePage />
          </Layout>
        } 
      />
    </Routes>
  );
}

export default App;
