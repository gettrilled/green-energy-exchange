
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Button from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Label } from '@/components/ui/label';

const ProducerForm = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    energyType: 'Solar',
    quantity: '',
    price: '',
    location: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validate form
    if (!formData.quantity || !formData.price || !formData.location) {
      toast.error("Please fill in all required fields");
      setIsSubmitting(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      // Success message
      toast.success("Energy listing created successfully!");
      
      // Reset form state
      setIsSubmitting(false);
      
      // Redirect to marketplace
      navigate('/marketplace');
    }, 1500);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">List Your Energy</CardTitle>
        <CardDescription>
          Provide details about the renewable energy you want to sell on Green Grid Nexus
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="energyType">Energy Type</Label>
              <select
                id="energyType"
                name="energyType"
                value={formData.energyType}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-nexus-green/50"
              >
                <option value="Solar">Solar</option>
                <option value="Wind">Wind</option>
                <option value="Hydro">Hydro</option>
                <option value="Biomass">Biomass</option>
              </select>
            </div>
            
            <div>
              <Label htmlFor="quantity">Available Quantity (kWh)</Label>
              <Input
                id="quantity"
                name="quantity"
                type="number"
                min="0"
                step="0.1"
                placeholder="Enter available energy quantity"
                value={formData.quantity}
                onChange={handleChange}
                required
              />
            </div>
            
            <div>
              <Label htmlFor="price">Price per kWh (₹)</Label>
              <Input
                id="price"
                name="price"
                type="number"
                min="0"
                step="0.01"
                placeholder="Enter price per kWh in INR"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </div>
            
            <div>
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                name="location"
                type="text"
                placeholder="Your city or locality in India"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>
            
            <div>
              <Label htmlFor="description">Description (Optional)</Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Describe your energy source, availability period, etc."
                value={formData.description}
                onChange={handleChange}
                rows={4}
              />
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                'List Energy for Sale'
              )}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate('/')}
              className="flex-1 sm:flex-none"
            >
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default ProducerForm;
