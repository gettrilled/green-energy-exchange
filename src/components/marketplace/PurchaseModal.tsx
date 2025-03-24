
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Slider } from "@/components/ui/slider";
import Button from "@/components/ui/Button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Check, CreditCard, IndianRupee, Landmark, Wallet, Download } from "lucide-react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";

interface PurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  listing: {
    id: number;
    producer: {
      name: string;
      rating: number;
      location: string;
    };
    energyType: string;
    available: number;
    price: number;
    distance: number;
  };
}

const formSchema = z.object({
  quantity: z.number().min(0.1).max(100),
  paymentMethod: z.enum(["upi", "card", "netbanking", "wallet"]),
  paymentDetails: z.string().optional()
});

const PurchaseModal: React.FC<PurchaseModalProps> = ({ isOpen, onClose, listing }) => {
  const [showReceipt, setShowReceipt] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [transactionId, setTransactionId] = useState("");
  const [processingPayment, setProcessingPayment] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("upi");
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      quantity: 1,
      paymentMethod: "upi",
      paymentDetails: ""
    },
  });

  const totalPrice = listing.price * quantity;
  const platformFee = totalPrice * 0.02;
  const totalAmount = totalPrice + platformFee;
  
  const handlePurchase = () => {
    setProcessingPayment(true);
    
    // Simulate payment processing
    setTimeout(() => {
      // Generate random transaction ID
      const randomId = Math.random().toString(36).substring(2, 12).toUpperCase();
      setTransactionId(randomId);
      setProcessingPayment(false);
      setShowReceipt(true);
      toast.success("Payment successful! Energy purchased.");
    }, 1500);
  };
  
  const handleClose = () => {
    setShowReceipt(false);
    onClose();
  };
  
  const handlePaymentMethodChange = (value: string) => {
    setSelectedPaymentMethod(value);
    form.setValue("paymentMethod", value as "upi" | "card" | "netbanking" | "wallet");
  };

  const downloadReceipt = () => {
    // In a real app, this would generate a PDF or print the receipt
    toast.success("Receipt downloaded successfully");
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px]">
        {!showReceipt ? (
          <>
            <DialogHeader>
              <DialogTitle>Purchase Energy</DialogTitle>
              <DialogDescription>
                Customize your energy purchase from {listing.producer.name}
              </DialogDescription>
            </DialogHeader>
            
            <Form {...form}>
              <form className="space-y-6 py-4">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-2">Energy Quantity (kWh)</h3>
                    <div className="flex items-center space-x-4">
                      <Slider 
                        value={[quantity]}
                        min={0.1}
                        max={Math.min(listing.available, 100)}
                        step={0.1}
                        onValueChange={(values) => setQuantity(values[0])}
                        className="flex-1"
                      />
                      <span className="bg-secondary py-1 px-3 rounded-md w-16 text-center">
                        {quantity.toFixed(1)}
                      </span>
                    </div>
                    <div className="flex justify-between mt-1 text-sm text-muted-foreground">
                      <span>0.1 kWh</span>
                      <span>{Math.min(listing.available, 100)} kWh</span>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-3">Payment Method</h3>
                    <FormField
                      control={form.control}
                      name="paymentMethod"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormControl>
                            <RadioGroup
                              onValueChange={handlePaymentMethodChange}
                              defaultValue={field.value}
                              className="grid grid-cols-2 gap-4"
                            >
                              <div>
                                <RadioGroupItem
                                  value="upi"
                                  id="upi"
                                  className="peer sr-only"
                                />
                                <Label
                                  htmlFor="upi"
                                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                >
                                  <IndianRupee className="mb-3 h-6 w-6" />
                                  <span className="text-sm font-medium">UPI</span>
                                </Label>
                              </div>
                              
                              <div>
                                <RadioGroupItem
                                  value="card"
                                  id="card"
                                  className="peer sr-only"
                                />
                                <Label
                                  htmlFor="card"
                                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                >
                                  <CreditCard className="mb-3 h-6 w-6" />
                                  <span className="text-sm font-medium">Card</span>
                                </Label>
                              </div>
                              
                              <div>
                                <RadioGroupItem
                                  value="netbanking"
                                  id="netbanking"
                                  className="peer sr-only"
                                />
                                <Label
                                  htmlFor="netbanking"
                                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                >
                                  <Landmark className="mb-3 h-6 w-6" />
                                  <span className="text-sm font-medium">Net Banking</span>
                                </Label>
                              </div>
                              
                              <div>
                                <RadioGroupItem
                                  value="wallet"
                                  id="wallet"
                                  className="peer sr-only"
                                />
                                <Label
                                  htmlFor="wallet"
                                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                >
                                  <Wallet className="mb-3 h-6 w-6" />
                                  <span className="text-sm font-medium">Wallet</span>
                                </Label>
                              </div>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  {selectedPaymentMethod === "upi" && (
                    <div>
                      <FormField
                        control={form.control}
                        name="paymentDetails"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>UPI ID</FormLabel>
                            <FormControl>
                              <Input placeholder="yourname@upi" {...field} />
                            </FormControl>
                            <FormDescription>
                              Enter your UPI ID for payment
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  )}
                  
                  {selectedPaymentMethod === "card" && (
                    <div className="space-y-3">
                      <FormField
                        control={form.control}
                        name="paymentDetails"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Card Number</FormLabel>
                            <FormControl>
                              <Input placeholder="1234 5678 9012 3456" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <FormLabel>Expiry Date</FormLabel>
                          <Input placeholder="MM/YY" />
                        </div>
                        <div>
                          <FormLabel>CVV</FormLabel>
                          <Input placeholder="123" maxLength={3} />
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {selectedPaymentMethod === "netbanking" && (
                    <div>
                      <FormField
                        control={form.control}
                        name="paymentDetails"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Select Bank</FormLabel>
                            <FormControl>
                              <select
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                {...field}
                              >
                                <option value="">Select your bank</option>
                                <option value="sbi">State Bank of India</option>
                                <option value="hdfc">HDFC Bank</option>
                                <option value="icici">ICICI Bank</option>
                                <option value="axis">Axis Bank</option>
                                <option value="kotak">Kotak Mahindra Bank</option>
                              </select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  )}
                  
                  {selectedPaymentMethod === "wallet" && (
                    <div>
                      <FormField
                        control={form.control}
                        name="paymentDetails"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Select Wallet</FormLabel>
                            <FormControl>
                              <select
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                {...field}
                              >
                                <option value="">Select your wallet</option>
                                <option value="paytm">Paytm</option>
                                <option value="phonepe">PhonePe</option>
                                <option value="amazonpay">Amazon Pay</option>
                                <option value="mobikwik">MobiKwik</option>
                                <option value="freecharge">Freecharge</option>
                              </select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  )}
                </div>
                
                <div className="rounded-lg bg-secondary/50 p-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-muted-foreground">Price per kWh</span>
                    <span>₹{listing.price.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-muted-foreground">Quantity</span>
                    <span>{quantity.toFixed(1)} kWh</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-muted-foreground">Platform fee (2%)</span>
                    <span>₹{platformFee.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-border mt-2 pt-2 flex justify-between font-medium">
                    <span>Total amount</span>
                    <span>₹{totalAmount.toFixed(2)}</span>
                  </div>
                </div>
              </form>
            </Form>
            
            <DialogFooter>
              <Button variant="outline" onClick={onClose}>Cancel</Button>
              <Button 
                onClick={handlePurchase} 
                disabled={processingPayment}
              >
                {processingPayment ? 'Processing...' : 'Complete Payment'}
              </Button>
            </DialogFooter>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="flex items-center">
                <div className="bg-green-100 dark:bg-green-900 rounded-full p-2 mr-2">
                  <Check className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                Payment Successful
              </DialogTitle>
              <DialogDescription>
                Your purchase has been completed successfully
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-6 py-4">
              <div className="bg-muted/50 rounded-lg p-4 space-y-3 border border-border">
                <div className="text-center mb-3">
                  <h3 className="text-lg font-semibold">PAYMENT RECEIPT</h3>
                  <p className="text-muted-foreground text-sm">Green Grid Nexus</p>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Transaction ID</span>
                  <span className="font-mono">{transactionId}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Date & Time</span>
                  <span>{new Date().toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Payment Method</span>
                  <span className="capitalize">{selectedPaymentMethod}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Producer</span>
                  <span>{listing.producer.name}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Energy Type</span>
                  <span>{listing.energyType}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Quantity</span>
                  <span>{quantity.toFixed(1)} kWh</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Price per kWh</span>
                  <span>₹{listing.price.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Platform Fee (2%)</span>
                  <span>₹{platformFee.toFixed(2)}</span>
                </div>
                <div className="pt-2 border-t border-border flex justify-between font-medium">
                  <span>Total amount</span>
                  <span>₹{totalAmount.toFixed(2)}</span>
                </div>
              </div>
              
              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-100 dark:border-green-900/30">
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
                  <p className="text-green-800 dark:text-green-400 text-sm font-medium">
                    Energy purchase confirmed! The energy will be transferred to your account within the next 10 minutes.
                  </p>
                </div>
              </div>
              
              <div className="text-center text-sm text-muted-foreground">
                A receipt has been sent to your registered email address
              </div>
            </div>
            
            <DialogFooter>
              <Button variant="outline" onClick={downloadReceipt} className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Download Receipt
              </Button>
              <Button onClick={handleClose}>Close</Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PurchaseModal;
