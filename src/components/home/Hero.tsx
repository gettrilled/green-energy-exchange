
import React from 'react';
import Button from '../ui/Button';
import GlassCard from '../ui/GlassCard';

interface HeroProps {
  onOpenAuthModal: (mode: 'login' | 'register') => void;
}

const Hero = ({ onOpenAuthModal }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-96 h-96 bg-nexus-green/10 rounded-full blur-3xl top-20 -left-20 animate-pulse-slow"></div>
        <div className="absolute w-96 h-96 bg-nexus-blue/10 rounded-full blur-3xl bottom-20 -right-20 animate-pulse-slow animation-delay-1000"></div>
      </div>
      
      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiNmOGZhZmMiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMzBjMCAxNi41NjktMTMuNDMxIDMwLTMwIDMwQzEzLjQzMSA2MCAwIDQ2LjU2OSAwIDMwIDAgMTMuNDMxIDEzLjQzMSAwIDMwIDBjMTYuNTY5IDAgMzAgMTMuNDMxIDMwIDMweiIgc3Ryb2tlPSIjZTJlOGYwIiBzdHJva2Utd2lkdGg9Ii41Ii8+PHBhdGggZD0iTTYwIDEyLjU2M2MwIDE2LjU2OC0xMy40MzEgMzAtMzAgMzAtMTYuNTY5IDAtMzAtMTMuNDMyLTMwLTMwQzAgLTQuMDA1IDEzLjQzMS0xNy41MzcgMzAtMTcuNTM3YzE2LjU2OSAwIDMwIDEzLjQzMiAzMCAzMC4xeiIgc3Ryb2tlPSIjZTJlOGYwIiBzdHJva2Utd2lkdGg9Ii41Ii8+PHBhdGggZD0iTTYwIDQ3LjQzOGMwIDE2LjU2OC0xMy40MzEgMzAtMzAgMzAtMTYuNTY5IDAtMzAtMTMuNDMyLTMwLTMwQzAgMzAuODcgMTMuNDMxIDE3LjMzOCAzMCAxNy4zMzhjMTYuNTY5IDAgMzAgMTMuNDMyIDMwIDMwLjF6IiBzdHJva2U9IiNlMmU4ZjAiIHN0cm9rZS13aWR0aD0iLjUiLz48L2c+PC9zdmc+')] opacity-5 -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-nexus-green/10 text-nexus-green rounded-full mb-4 animate-fade-down">
            The Future of Energy Exchange
          </span>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 animate-fade-down animate-delay-100">
            <span className="nexus-gradient-text">Empowering</span> Sustainable Energy Exchange
          </h1>
          
          <p className="text-lg text-gray-700 mb-8 animate-fade-down animate-delay-200 max-w-xl mx-auto lg:mx-0">
            A decentralized marketplace for a greener future, connecting renewable energy producers with consumers using smart contract technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-down animate-delay-300">
            <Button 
              size="lg" 
              onClick={() => onOpenAuthModal('register')}
            >
              Join as Producer
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => onOpenAuthModal('register')}
            >
              Join as Consumer
            </Button>
          </div>
          
          <div className="mt-12 flex items-center justify-center lg:justify-start space-x-8 animate-fade-down animate-delay-400">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-nexus-green/10 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-nexus-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v8m0 0l-4-4m4 4l4-4" />
                  <path d="M12 14v8m0 0l-4-4m4 4l4-4" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </div>
              <span className="text-sm font-medium">P2P Trading</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-nexus-blue/10 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-nexus-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <span className="text-sm font-medium">Secure Platform</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-nexus-green/10 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-nexus-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <span className="text-sm font-medium">Real-time Data</span>
            </div>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 relative">
          <GlassCard intensity="medium" className="relative z-10 p-6 animate-float">
            <div className="bg-nexus-green/5 rounded-lg p-4 mb-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-gray-700">Available Energy</span>
                <span className="text-xs px-2 py-1 bg-nexus-green/10 text-nexus-green rounded-full">9.5 kWh</span>
              </div>
              <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-nexus-green rounded-full" style={{ width: "75%" }}></div>
              </div>
            </div>
            
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm text-gray-500 mb-1">Current Price</p>
                <p className="text-2xl font-semibold flex items-center">
                  <span className="text-xl">₹</span>5.20 
                  <span className="text-sm text-gray-500 ml-1">/kWh</span>
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Energy Source</p>
                <div className="flex items-center space-x-1">
                  <span className="w-3 h-3 bg-nexus-green rounded-full"></span>
                  <span className="font-medium">Solar Energy</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-1">Produced</p>
                <p className="font-semibold">42.8 kWh</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-1">Sold</p>
                <p className="font-semibold">33.3 kWh</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-1">Earnings</p>
                <p className="font-semibold">₹173.16</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-200 mr-2"></div>
                <span className="font-medium">Rohan Sharma</span>
              </div>
              <div className="flex items-center text-nexus-green">
                <span className="mr-1">View Details</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </GlassCard>
          
          {/* Decorative Elements */}
          <div className="absolute top-10 -right-10 w-32 h-32 bg-nexus-blue/20 rounded-full blur-xl z-0 animate-pulse-slow"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-nexus-green/20 rounded-full blur-xl z-0 animate-pulse-slow animation-delay-500"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
