import { Shield, Home } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface IdentityVerificationStepProps {
  formData: any;
  handleInputChange: (field: string, value: any) => void;
  handleOptionSelect?: (field: string, value: string) => void;
}

export default function IdentityVerificationStep({ 
  formData, 
  handleInputChange,
  handleOptionSelect 
}: IdentityVerificationStepProps) {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Identity Verification</h3>
        <p className="text-gray-600">We need this information to verify your identity</p>
      </div>
      
      <div className="max-w-md mx-auto space-y-6">
        {/* SSN Input */}
        <div className="space-y-2">
          <Label htmlFor="ssn" className="text-base font-medium">
            Social Security Number
          </Label>
          <Input
            id="ssn"
            type="text"
            placeholder="XXX-XX-XXXX"
            value={formData.ssn || ''}
            onChange={(e) => {
              // Format SSN as user types
              let value = e.target.value.replace(/\D/g, '');
              if (value.length >= 6) {
                value = value.slice(0, 3) + '-' + value.slice(3, 5) + '-' + value.slice(5, 9);
              } else if (value.length >= 4) {
                value = value.slice(0, 3) + '-' + value.slice(3);
              }
              handleInputChange('ssn', value);
            }}
            className="text-base p-4"
            maxLength={11}
          />
          <p className="text-xs text-gray-500">
            Your SSN is encrypted and only used for identity verification
          </p>
        </div>

        {/* Homeowner Question */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 mb-2">
            <Home className="h-5 w-5 text-emerald-600" />
            <Label className="text-base font-medium">
              Are you a homeowner?
            </Label>
          </div>
          
          <div className="space-y-3">
            {[
              { value: 'yes', label: 'Yes, I own my home' },
              { value: 'no', label: 'No, I rent or have other arrangements' }
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => {
                  handleInputChange('homeOwner', option.value);
                  // Si hay handleOptionSelect, úsalo para auto-avanzar
                  if (handleOptionSelect) {
                    handleOptionSelect('homeOwner', option.value);
                  }
                }}
                className={cn(
                  "w-full p-4 border-2 rounded-xl font-medium text-left transition-all duration-200",
                  formData.homeOwner === option.value
                    ? "border-emerald-600 bg-emerald-50 text-emerald-700 shadow-md"
                    : "border-gray-200 hover:border-emerald-400 hover:bg-emerald-50/50"
                )}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Security Notice */}
        <div className="bg-gray-50 p-4 rounded-lg mt-6">
          <div className="flex items-start gap-3">
            <Shield className="h-5 w-5 text-gray-600 mt-0.5" />
            <div className="text-sm text-gray-600">
              <p className="font-medium mb-1">Your information is secure</p>
              <p>We use bank-level encryption to protect your personal data. Your SSN is never stored in plain text.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}