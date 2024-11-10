import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoadingSpinner from './components/LoadingSpinner';

const Home = React.lazy(() => import('./pages/Home'));
const ProductsPage = React.lazy(() => import('./pages/Products'));
const UseCasesPage = React.lazy(() => import('./pages/UseCases'));
const UseCaseDetail = React.lazy(() => import('./pages/UseCaseDetail'));
const About = React.lazy(() => import('./pages/About'));

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-primary-900 via-accent-900 to-highlight-900 text-white">
        <div className="container mx-auto px-4 py-8">
          <Navbar />
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/use-cases" element={<UseCasesPage />} />
              <Route path="/use-cases/:id" element={<UseCaseDetail />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
}