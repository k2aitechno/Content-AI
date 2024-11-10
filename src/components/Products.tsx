import React from 'react';
import { Wand2, Share, BarChart2 } from 'lucide-react';

const products = [
  {
    title: 'Content Generator',
    description: 'AI-powered content creation with customizable templates and brand voice settings.',
    image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=800&q=80',
    icon: Wand2
  },
  {
    title: 'Social Media Manager',
    description: 'Schedule, analyze, and optimize your social media presence across platforms.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    icon: Share
  },
  {
    title: 'Analytics Dashboard',
    description: 'Comprehensive insights and metrics to measure your content performance.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    icon: BarChart2
  }
];

export default function Products() {
  return (
    <section id="products" className="py-20">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
        Our Products
      </h2>
      <div className="space-y-20 max-w-6xl mx-auto">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center gap-8">
            <div className={`w-full md:w-1/2 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
              <div className="relative rounded-xl overflow-hidden group">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-900/50 to-accent-900/50 opacity-60" />
              </div>
            </div>
            <div className={`w-full md:w-1/2 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
              <product.icon className="w-10 h-10 text-primary-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">{product.title}</h3>
              <p className="text-gray-300 text-lg">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}