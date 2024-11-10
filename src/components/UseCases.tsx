import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Target, Users, ArrowRight } from 'lucide-react';

const useCases = [
  {
    id: 'social-media',
    title: 'Social Media Management',
    description: 'Create and schedule engaging posts across multiple platforms',
    image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=800&q=80',
    icon: Users
  },
  {
    id: 'content-marketing',
    title: 'Content Marketing',
    description: 'Generate blog posts, articles, and marketing copy that converts',
    image: 'https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&w=800&q=80',
    icon: Target
  },
  {
    id: 'brand-building',
    title: 'Brand Building',
    description: 'Maintain consistent brand voice across all your content',
    image: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&w=800&q=80',
    icon: Sparkles
  }
];

export default function UseCases() {
  return (
    <section id="use-cases" className="py-20">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
        Transform Your Content Strategy
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {useCases.map((useCase) => (
          <Link
            key={useCase.id}
            to={`/use-cases/${useCase.id}`}
            className="group relative overflow-hidden rounded-xl transform transition-all duration-300 hover:-translate-y-2"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-900 z-10" />
            <img
              src={useCase.image}
              alt={useCase.title}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <useCase.icon className="w-8 h-8 text-primary-400 mb-3" />
              <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
              <p className="text-gray-300 mb-4">{useCase.description}</p>
              <div className="flex items-center text-primary-400 group-hover:text-primary-300 transition-colors">
                <span className="mr-2">Learn more</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}