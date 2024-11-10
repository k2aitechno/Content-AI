import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <div className="max-w-5xl mx-auto text-center">
      <div className="inline-flex items-center px-4 py-2 mb-8 rounded-full bg-primary-900/30 border border-primary-800/50">
        <Sparkles className="w-4 h-4 text-primary-400 mr-2" />
        <span className="text-sm font-medium">Revolutionizing Content Creation</span>
      </div>
      
      <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
        <span className="bg-gradient-to-r from-primary-400 via-accent-400 to-highlight-400 bg-clip-text text-transparent">
          Transform Your Content
        </span>
        <br />
        Strategy with AI
      </h1>
      
      <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
        Harness the power of artificial intelligence to create, optimize, and distribute 
        content that resonates with your audience. No complex tools, no steep learning curves 
        – just powerful results that drive engagement.
      </p>
    </div>
  );
}