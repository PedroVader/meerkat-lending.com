import React from 'react';
import { MapPin } from "lucide-react";

interface AddressStepProps {
  formData: any;
  handleInputChange: (field: string, value: any) => void;
}

export default function AddressStep({ formData, handleInputChange }: AddressStepProps) {
  return (
    <div className="space-y-6 relative">
      <style jsx>{`
        /* Asegurar que los inputs sean clickeables */
        input {
          position: relative;
          z-index: 1;
        }
        
        /* Prevenir que otros elementos se superpongan */
        .form-input {
          position: relative;
          z-index: 10;
        }
        
        /* Estilo específico para el input de ZIP */
        .zip-input {
          text-align: center;
          letter-spacing: 0.1em;
        }
      `}</style>

      <div className="text-center">
        <MapPin className="h-12 w-12 text-emerald-600 mx-auto mb-3" />
        <h3 className="text-2xl font-bold text-gray-800 mb-2">What's your address?</h3>
        <p className="text-gray-600">We need to verify your location</p>
      </div>
      
      <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
        <div className="form-input">
          <label htmlFor="zipCode" className="text-base font-medium mb-2 block">
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
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-base zip-input"
            maxLength={5}
            pattern="[0-9]*"
            inputMode="numeric"
            autoComplete="postal-code"
          />
        </div>
        
        <div className="form-input">
          <label htmlFor="address" className="text-base font-medium mb-2 block">
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
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-base"
            autoComplete="street-address"
          />
        </div>
      </div>
    </div>
  );
}