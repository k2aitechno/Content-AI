import React from 'react';
import { Wand2, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center">
      <div className="max-w-4xl mx-auto">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-400/10 text-primary-400 mb-8">
          <Wand2 className="w-4 h-4 mr-2" />
          <span>Coming Soon</span>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-400 via-accent-400 to-highlight-400 bg-clip-text text-transparent">
          Transform Your Content Strategy with AI
        </h1>

        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Generate, optimize, and distribute content across platforms with our
          AI-powered tools. Join the waitlist to be among the first to
          experience the future of content creation.
        </p>
      </div>
    </div>
  );
}
