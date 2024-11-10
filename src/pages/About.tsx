import React from 'react';
import { Users, Rocket, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-5xl mx-auto space-y-20">
      {/* Mission Section */}
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
          Our Mission
        </h1>
        <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
          We're on a mission to democratize content creation by making AI-powered tools accessible, 
          intuitive, and effective for businesses of all sizes. Our platform combines cutting-edge 
          technology with user-friendly design to help you create content that resonates.
        </p>
      </section>

      {/* Values Section */}
      <section className="grid md:grid-cols-3 gap-8">
        <div className="p-8 rounded-xl bg-gradient-to-br from-primary-900/50 to-accent-900/50 backdrop-blur border border-primary-800/50">
          <Users className="w-10 h-10 text-primary-400 mb-4" />
          <h3 className="text-xl font-semibold mb-4">Customer First</h3>
          <p className="text-gray-300">
            Every feature we build starts with understanding our users' needs. 
            Your success is our success.
          </p>
        </div>
        <div className="p-8 rounded-xl bg-gradient-to-br from-primary-900/50 to-accent-900/50 backdrop-blur border border-primary-800/50">
          <Rocket className="w-10 h-10 text-accent-400 mb-4" />
          <h3 className="text-xl font-semibold mb-4">Innovation</h3>
          <p className="text-gray-300">
            We're constantly pushing the boundaries of what's possible with AI and content creation.
          </p>
        </div>
        <div className="p-8 rounded-xl bg-gradient-to-br from-primary-900/50 to-accent-900/50 backdrop-blur border border-primary-800/50">
          <Heart className="w-10 h-10 text-highlight-400 mb-4" />
          <h3 className="text-xl font-semibold mb-4">Quality</h3>
          <p className="text-gray-300">
            We believe in delivering excellence in every piece of content generated through our platform.
          </p>
        </div>
      </section>
    </div>
  );
}