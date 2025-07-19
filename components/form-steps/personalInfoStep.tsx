import React from 'react';
import { User } from "lucide-react";

interface PersonalInfoStepProps {
  formData: any;
  handleInputChange: (field: string, value: any) => void;
}

export default function PersonalInfoStep({ formData, handleInputChange }: PersonalInfoStepProps) {
  return (
    <div className="space-y-6">
      <div className="text-center mt-5">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Personal Information</h3>
        <p className="text-gray-600">Tell us about yourself</p>
      </div>
      
      <div className="max-w-md mx-auto space-y-6">
        {/* First Name */}
        <div className="space-y-2">
          <label htmlFor="firstName" className="text-base font-medium">
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            placeholder="John"
            value={formData.firstName || ''}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
            className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-base"
            autoComplete="given-name"
          />
        </div>
        
        {/* Last Name */}
        <div className="space-y-2">
          <label htmlFor="lastName" className="text-base font-medium">
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            placeholder="Doe"
            value={formData.lastName || ''}
            onChange={(e) => handleInputChange('lastName', e.target.value)}
            className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-base"
            autoComplete="family-name"
          />
        </div>
        
        {/* Date of Birth */}
        <div className="space-y-2">
          <label htmlFor="dateOfBirth" className="text-base font-medium">
            Date of Birth
          </label>
          <input
            id="dateOfBirth"
            type="date"
            value={formData.dateOfBirth || ''}
            onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
            className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-base"
            max={new Date().toISOString().split('T')[0]}
          />
          <p className="text-xs text-gray-500">
            You must be 18 years or older to apply
          </p>
        </div>
      </div>
    </div>
  );
}