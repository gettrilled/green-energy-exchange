
import React from 'react';
import Button from '../ui/Button';

const HowItWorks = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-nexus-green/10 text-nexus-green rounded-full mb-4">
            Energy Trading Platform
          </span>
          
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Connecting Energy Producers with Consumers
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Our platform enables direct energy exchange between local producers and consumers, 
            creating a more sustainable and efficient energy ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="p-6 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-nexus-green/10 rounded-full flex items-center justify-center mb-4">
              <span className="font-bold text-nexus-green">01</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Register & Connect</h3>
            <p className="text-gray-600">Create an account as an energy producer or consumer and set up your profile.</p>
          </div>
          
          <div className="p-6 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-nexus-blue/10 rounded-full flex items-center justify-center mb-4">
              <span className="font-bold text-nexus-blue">02</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">List or Browse Energy</h3>
            <p className="text-gray-600">Producers can list available energy, while consumers browse the marketplace for options.</p>
          </div>
          
          <div className="p-6 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-nexus-green/10 rounded-full flex items-center justify-center mb-4">
              <span className="font-bold text-nexus-green">03</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Secure Transactions</h3>
            <p className="text-gray-600">Complete transactions with secure payments in Indian Rupees through our platform.</p>
          </div>
          
          <div className="p-6 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-nexus-blue/10 rounded-full flex items-center justify-center mb-4">
              <span className="font-bold text-nexus-blue">04</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Track & Analyze</h3>
            <p className="text-gray-600">Monitor your energy production, consumption, and transactions with detailed analytics.</p>
          </div>
        </div>
        
        <div className="text-center">
          <Button size="lg">
            Explore the Marketplace
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
