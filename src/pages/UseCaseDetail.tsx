import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const useCaseDetails = {
  'social-media': {
    title: 'Social Media Management',
    hero: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=1200&q=80',
    description: 'Transform your social media presence with AI-powered content creation and management.',
    benefits: [
      'Generate engaging social media posts in seconds',
      'Schedule content across multiple platforms',
      'Analyze engagement metrics and optimize performance',
      'Maintain consistent brand voice across channels',
      'Auto-generate hashtags and captions'
    ],
    features: [
      'Multi-platform support (Twitter, LinkedIn, Instagram, Facebook)',
      'AI-powered content suggestions',
      'Advanced scheduling capabilities',
      'Real-time analytics dashboard',
      'Automated hashtag generation'
    ]
  },
  'content-marketing': {
    title: 'Content Marketing',
    hero: 'https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&w=1200&q=80',
    description: 'Create compelling content that drives engagement and converts visitors into customers.',
    benefits: [
      'Generate SEO-optimized blog posts and articles',
      'Create compelling marketing copy',
      'Maintain consistent brand messaging',
      'Save time on content creation',
      'Improve content performance'
    ],
    features: [
      'AI content generation engine',
      'SEO optimization tools',
      'Content performance tracking',
      'Editorial calendar management',
      'Content distribution automation'
    ]
  },
  'brand-building': {
    title: 'Brand Building',
    hero: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&w=1200&q=80',
    description: 'Build and maintain a strong brand presence across all your digital channels.',
    benefits: [
      'Maintain consistent brand voice',
      'Create branded visual content',
      'Monitor brand mentions and sentiment',
      'Build brand recognition',
      'Increase brand loyalty'
    ],
    features: [
      'Brand voice customization',
      'Visual content templates',
      'Brand monitoring tools',
      'Sentiment analysis',
      'Brand guidelines integration'
    ]
  }
};

export default function UseCaseDetail() {
  const { id } = useParams();
  const useCase = useCaseDetails[id as keyof typeof useCaseDetails];

  if (!useCase) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold mb-4">Use case not found</h2>
        <Link to="/use-cases" className="text-primary-400 hover:text-primary-300">
          Return to use cases
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <Link
        to="/use-cases"
        className="inline-flex items-center text-primary-400 hover:text-primary-300 mb-8"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Use Cases
      </Link>

      <div className="relative rounded-xl overflow-hidden mb-12">
        <img
          src={useCase.hero}
          alt={useCase.title}
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-accent-900/80 flex items-center">
          <div className="px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{useCase.title}</h1>
            <p className="text-xl text-gray-300 max-w-2xl">{useCase.description}</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Key Benefits</h2>
          <ul className="space-y-4">
            {useCase.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-6">Features</h2>
          <ul className="space-y-4">
            {useCase.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="w-5 h-5 text-accent-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}