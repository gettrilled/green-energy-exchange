
import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Producer {
  name: string;
  rating: number;
  location: string;
}

export interface EnergyListing {
  id: number;
  producer: Producer;
  energyType: string;
  available: number;
  price: number;
  distance: number;
  description?: string;
}

interface EnergyListingsContextType {
  listings: EnergyListing[];
  addListing: (listing: Omit<EnergyListing, 'id' | 'producer' | 'distance'> & { location: string }) => void;
}

const EnergyListingsContext = createContext<EnergyListingsContextType | undefined>(undefined);

export const useEnergyListings = () => {
  const context = useContext(EnergyListingsContext);
  if (!context) {
    throw new Error('useEnergyListings must be used within an EnergyListingsProvider');
  }
  return context;
};

interface EnergyListingsProviderProps {
  children: ReactNode;
  initialListings?: EnergyListing[];
}

export const EnergyListingsProvider: React.FC<EnergyListingsProviderProps> = ({ children, initialListings = [] }) => {
  const [listings, setListings] = useState<EnergyListing[]>(initialListings);

  const addListing = (listingData: Omit<EnergyListing, 'id' | 'producer' | 'distance'> & { location: string }) => {
    const newListing: EnergyListing = {
      id: Date.now(), // Simple unique ID generation
      producer: {
        name: 'You', // Default to current user
        rating: 5.0, // Default rating
        location: listingData.location,
      },
      energyType: listingData.energyType,
      available: Number(listingData.available),
      price: Number(listingData.price),
      distance: 0, // Default to 0 for current user
      description: listingData.description,
    };

    setListings(prev => [newListing, ...prev]);
  };

  return (
    <EnergyListingsContext.Provider value={{ listings, addListing }}>
      {children}
    </EnergyListingsContext.Provider>
  );
};
