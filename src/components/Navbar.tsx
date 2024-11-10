import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-primary-400' : 'text-gray-300 hover:text-primary-400';
  };

  return (
    <nav className="flex items-center justify-between mb-12">
      <Link to="/" className="flex items-center space-x-2">
        <Sparkles className="w-8 h-8 text-primary-400" />
        <span className="text-xl font-bold">ContentAI</span>
      </Link>
      
      <div className="flex items-center space-x-8">
        <Link to="/products" className={`${isActive('/products')} transition-colors`}>
          Products
        </Link>
        <Link to="/use-cases" className={`${isActive('/use-cases')} transition-colors`}>
          Use Cases
        </Link>
        <Link to="/about" className={`${isActive('/about')} transition-colors`}>
          About
        </Link>
      </div>
    </nav>
  );
}