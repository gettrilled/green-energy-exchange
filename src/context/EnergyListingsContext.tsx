
import React, { createContext, useContext, useState } from 'react';

// Define the shape of an energy listing
export interface EnergyListing {
  id: number;
  producer: {
    name: string;
    rating: number;
    location: string;
  };
  energyType: string;
  available: number;
  price: number;
  description?: string;
  distance: number;
  location: string;
}

// Define the shape of the context
interface EnergyListingsContextProps {
  listings: EnergyListing[];
  addListing: (listing: Omit<EnergyListing, 'id'>) => void;
  removeListing: (id: number) => void;
}

// Create the context
const EnergyListingsContext = createContext<EnergyListingsContextProps | undefined>(undefined);

// Provider component
export const EnergyListingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [listings, setListings] = useState<EnergyListing[]>([]);

  const addListing = (listing: Omit<EnergyListing, 'id'>) => {
    const newListing = {
      ...listing,
      id: Date.now(),
    };
    setListings(prev => [...prev, newListing]);
  };

  const removeListing = (id: number) => {
    setListings(prev => prev.filter(listing => listing.id !== id));
  };

  return (
    <EnergyListingsContext.Provider value={{ listings, addListing, removeListing }}>
      {children}
    </EnergyListingsContext.Provider>
  );
};

// Custom hook to use the energy listings context
export const useEnergyListings = () => {
  const context = useContext(EnergyListingsContext);
  if (context === undefined) {
    throw new Error('useEnergyListings must be used within an EnergyListingsProvider');
  }
  return context;
};
