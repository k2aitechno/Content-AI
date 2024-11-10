import React from 'react';
import { Bot, Share2, BarChart3, Zap, Shield, Users } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const features = [
  {
    icon: Bot,
    title: 'Advanced AI Content Creation',
    description: 'Harness the power of cutting-edge AI to generate high-quality, engaging content that resonates with your audience. Our smart templates and brand voice settings ensure consistency across all your communications.',
    color: 'text-primary-400'
  },
  {
    icon: Share2,
    title: 'Intelligent Distribution',
    description: 'Leverage data-driven insights to automatically distribute your content when your audience is most active. Our platform analyzes engagement patterns across multiple social networks to maximize your reach.',
    color: 'text-accent-400'
  },
  {
    icon: BarChart3,
    title: 'Comprehensive Analytics',
    description: 'Track performance metrics, engagement rates, and conversion data in real-time. Our advanced analytics dashboard provides actionable insights to continuously optimize your content strategy.',
    color: 'text-highlight-400'
  },
  {
    icon: Zap,
    title: 'Lightning-Fast Generation',
    description: 'Generate months worth of content in minutes, not hours. Our AI engine processes your requirements instantly, allowing you to focus on strategy rather than execution.',
    color: 'text-primary-400'
  },
  {
    icon: Shield,
    title: 'Brand Safety & Compliance',
    description: 'Built-in content filters and compliance checks ensure your generated content aligns with your brand guidelines and industry regulations. Stay consistent and compliant effortlessly.',
    color: 'text-accent-400'
  },
  {
    icon: Users,
    title: 'Collaborative Workspace',
    description: 'Enable seamless collaboration among team members with real-time editing, approval workflows, and role-based access control. Keep your entire content team aligned and efficient.',
    color: 'text-highlight-400'
  }
];

export default function Features() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {features.map((feature, index) => {
        const [ref, inView] = useInView({
          triggerOnce: true,
          threshold: 0.1,
        });

        return (
          <div
            key={index}
            ref={ref}
            className={`transform transition-all duration-500 ${
              inView
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="h-full p-8 rounded-xl bg-gradient-to-br from-primary-900/50 to-accent-900/50 backdrop-blur border border-primary-800/50 hover:border-primary-700/50 transition-all">
              <feature.icon className={`w-12 h-12 ${feature.color} mb-6`} />
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}