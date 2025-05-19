import React from 'react';
import Navbar from '../components/layout/Navbar';
import HowItWorksComponent from '../components/home/HowItWorks';
import ChatBot from '../components/ui/ChatBot';

const HowItWorks = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <HowItWorksComponent />
      </div>
      <ChatBot />
    </div>
  );
};

export default HowItWorks;
