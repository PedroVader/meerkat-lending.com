import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

interface BankDetailsStepProps {
  formData: any;
  handleInputChange: (field: string, value: any) => void;
  isStepValid: () => boolean;
  handleNext: () => void;
}

export default function BankDetailsStep({ 
  formData, 
  handleInputChange, 
  isStepValid,
  handleNext 
}: BankDetailsStepProps) {
  // Auto-focus en el primer input al montar
  useEffect(() => {
    const routingInput = document.getElementById('routingNumber');
    if (routingInput) {
      routingInput.focus();
    }
  }, []);

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Deposit Details</h3>
        <p className="text-gray-600">Your data is secure with 256-bit encryption</p>
      </div>
      
      <div className="max-w-md mx-auto space-y-6">
        <div className="bg-emerald-50 p-4 rounded-xl">
          <div>
            <p className="text-sm font-semibold text-emerald-800">Bank-Level Security</p>
            <p className="text-xs text-emerald-700 mt-1">Your information is protected using industry-standard encryption</p>
          </div>
        </div>
        
        {/* Routing Number */}
        <div className="space-y-2">
          <Label htmlFor="routingNumber" className="text-base font-medium">
            ABA/Routing Number
          </Label>
          <Input
            id="routingNumber"
            type="text"
            placeholder="123456789"
            value={formData.routingNumber}
            onChange={(e) => handleInputChange('routingNumber', e.target.value)}
            className="text-base p-4 text-center"
            maxLength={9}
          />
          <p className="text-xs text-gray-500">
            9-digit routing number
          </p>
        </div>
        
        {/* Account Number */}
        <div className="space-y-2">
          <Label htmlFor="accountNumber" className="text-base font-medium">
            Account Number
          </Label>
          <Input
            id="accountNumber"
            type="text"
            placeholder="Enter account number"
            value={formData.accountNumber}
            onChange={(e) => handleInputChange('accountNumber', e.target.value)}
            className="text-base p-4 text-center"
          />
          <p className="text-xs text-gray-500">
            As shown on your bank statements
          </p>
        </div>
        
        <p className="text-xs text-gray-600 text-center pt-2">
          Your routing number can be found on your bank statements or at the bottom of your checks
        </p>
        
        {/* Submit Button */}
        <div className="text-center pt-4">
          <Button
            onClick={handleNext}
            disabled={!isStepValid()}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Get Your Rates
          </Button>
        </div>
      </div>
    </div>
  );
}