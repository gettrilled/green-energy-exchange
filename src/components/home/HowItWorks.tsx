
import React from 'react';
import Button from '../ui/Button';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Register & Connect',
      description: 'Create an account as an energy producer or consumer and set up your profile.',
      iconColor: 'bg-nexus-green/10',
      textColor: 'text-nexus-green',
    },
    {
      number: '02',
      title: 'List or Browse Energy',
      description: 'Producers can list available energy, while consumers browse the marketplace for options.',
      iconColor: 'bg-nexus-blue/10',
      textColor: 'text-nexus-blue',
    },
    {
      number: '03',
      title: 'Secure Transactions',
      description: 'Complete transactions with secure payments in Indian Rupees through our platform.',
      iconColor: 'bg-nexus-green/10',
      textColor: 'text-nexus-green',
    },
    {
      number: '04',
      title: 'Track & Analyze',
      description: 'Monitor your energy production, consumption, and transactions with detailed analytics.',
      iconColor: 'bg-nexus-blue/10',
      textColor: 'text-nexus-blue',
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className="p-6 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all"
                >
                  <div className={`w-12 h-12 ${step.iconColor} rounded-full flex items-center justify-center mb-4`}>
                    <span className={`font-bold ${step.textColor}`}>{step.number}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 order-1 lg:order-2 text-center lg:text-left">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-nexus-green/10 text-nexus-green rounded-full mb-4">
              Simple Process
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              How Green Grid Nexus Works
            </h2>
            
            <p className="text-lg text-gray-700 mb-8 max-w-lg mx-auto lg:mx-0">
              Our platform simplifies the process of buying and selling renewable energy,
              creating a sustainable ecosystem that benefits both producers and consumers.
            </p>
            
            <div className="mb-10">
              <h4 className="font-semibold mb-3">For Energy Producers</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-nexus-green mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>List your excess renewable energy on the marketplace</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-nexus-green mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Set your own prices and availability timeframes</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-nexus-green mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Track production and earnings in real-time</span>
                </li>
              </ul>
            </div>
            
            <div className="mb-10">
              <h4 className="font-semibold mb-3">For Energy Consumers</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-nexus-blue mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Browse available energy sources in your area</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-nexus-blue mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Compare prices and choose the best options</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-nexus-blue mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Monitor your consumption and savings</span>
                </li>
              </ul>
            </div>
            
            <Button size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
