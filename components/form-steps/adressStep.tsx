import React from 'react';
import { MapPin } from "lucide-react";

interface AddressStepProps {
  formData: any;
  handleInputChange: (field: string, value: any) => void;
}

export default function AddressStep({ formData, handleInputChange }: AddressStepProps) {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">What's your address?</h3>
        <p className="text-gray-600">We need to verify your location</p>
      </div>
      
      <div className="max-w-md mx-auto space-y-6">
        {/* ZIP Code */}
        <div className="space-y-2">
          <label htmlFor="zipCode" className="text-base font-medium">
            ZIP Code
          </label>
          <input
            id="zipCode"
            type="text"
            placeholder="12345"
            value={formData.zipCode || ''}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              // Solo permitir números
              const value = e.target.value.replace(/\D/g, '');
              if (value.length <= 5) {
                handleInputChange('zipCode', value);
              }
            }}
            className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-base text-center tracking-wider"
            maxLength={5}
            pattern="[0-9]*"
            inputMode="numeric"
            autoComplete="postal-code"
          />
          <p className="text-xs text-gray-500">
            5-digit US ZIP code
          </p>
        </div>
        
        {/* Street Address */}
        <div className="space-y-2">
          <label htmlFor="address" className="text-base font-medium">
            Street Address
          </label>
          <input
            id="address"
            type="text"
            placeholder="123 Main Street, City"
            value={formData.address || ''}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
              handleInputChange('address', e.target.value)
            }
            className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-base"
            autoComplete="street-address"
          />
          <p className="text-xs text-gray-500">
            Include street number, name, and city
          </p>
        </div>
      </div>
    </div>
  );
}