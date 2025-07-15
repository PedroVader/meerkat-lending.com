import { Mail, Check, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";

interface ContactInfoStepProps {
  formData: any;
  handleInputChange: (field: string, value: any) => void;
  isStepValid: () => boolean;
}

export default function ContactInfoStep({ formData, handleInputChange, isStepValid }: ContactInfoStepProps) {
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  // Email validation
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError('Email is required');
      return false;
    }
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
      return false;
    }
    setEmailError('');
    return true;
  };

  // US Phone validation and formatting
  const validateAndFormatPhone = (phone: string) => {
    // Remove all non-digits
    const cleaned = phone.replace(/\D/g, '');
    
    if (!cleaned) {
      setPhoneError('Phone number is required');
      return phone;
    }
    
    if (cleaned.length < 10) {
      setPhoneError('Phone number must be at least 10 digits');
      return phone;
    }
    
    if (cleaned.length > 11) {
      setPhoneError('Phone number is too long');
      return phone;
    }
    
    if (cleaned.length === 11 && !cleaned.startsWith('1')) {
      setPhoneError('11-digit number must start with 1');
      return phone;
    }
    
    setPhoneError('');
    
    // Format the phone number
    let formatted = '';
    if (cleaned.length === 10) {
      formatted = `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
    } else if (cleaned.length === 11) {
      formatted = `+${cleaned.slice(0, 1)} (${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7)}`;
    }
    
    return formatted || phone;
  };

  const handleEmailChange = (value: string) => {
    handleInputChange('email', value);
    // Validate immediately
    validateEmail(value);
  };

  const handlePhoneChange = (value: string) => {
    const formatted = validateAndFormatPhone(value);
    handleInputChange('phone', formatted);
  };

  // Update validation states when formData changes
  useEffect(() => {
    if (formData.email) {
      validateEmail(formData.email);
    }
    if (formData.phone) {
      validateAndFormatPhone(formData.phone);
    }
  }, [formData.email, formData.phone]);

  const isEmailValid = formData.email && !emailError;
  const isPhoneValid = formData.phone && !phoneError;

  // Check if step is complete and valid
  const isStepComplete = isEmailValid && isPhoneValid;

  return (
    <div className="space-y-8">
      <div className="text-center">
        <Mail className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
        <h3 className="text-3xl font-bold text-gray-800 mb-3">Contact Information</h3>
        <p className="text-lg text-gray-600">We'll use this to send your loan offers</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-base font-medium block">
            Email Address
          </Label>
          <div className="relative">
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => handleEmailChange(e.target.value)}
              onBlur={(e) => validateEmail(e.target.value)}
              className={`text-base p-4 pr-10 transition-colors ${
                formData.email 
                  ? isEmailValid 
                    ? 'border-green-500 focus:border-green-500' 
                    : 'border-red-500 focus:border-red-500'
                  : 'border-gray-200 focus:border-emerald-500'
              }`}
            />
            {formData.email && (
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                {isEmailValid ? (
                  <Check className="h-5 w-5 text-green-500" />
                ) : (
                  <X className="h-5 w-5 text-red-500" />
                )}
              </div>
            )}
          </div>
          {emailError && (
            <p className="text-sm text-red-500 mt-1">{emailError}</p>
          )}
          {isEmailValid && (
            <p className="text-sm text-green-600 mt-1">✓ Valid email address</p>
          )}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-base font-medium block">
            Phone Number
          </Label>
          <div className="relative">
            <Input
              id="phone"
              type="tel"
              placeholder="(555) 123-4567"
              value={formData.phone}
              onChange={(e) => handlePhoneChange(e.target.value)}
              className={`text-base p-4 pr-10 transition-colors ${
                formData.phone 
                  ? isPhoneValid 
                    ? 'border-green-500 focus:border-green-500' 
                    : 'border-red-500 focus:border-red-500'
                  : 'border-gray-200 focus:border-emerald-500'
              }`}
            />
            {formData.phone && (
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                {isPhoneValid ? (
                  <Check className="h-5 w-5 text-green-500" />
                ) : (
                  <X className="h-5 w-5 text-red-500" />
                )}
              </div>
            )}
          </div>
          {phoneError && (
            <p className="text-sm text-red-500 mt-1">{phoneError}</p>
          )}
          {isPhoneValid && (
            <p className="text-sm text-green-600 mt-1">✓ Valid US phone number</p>
          )}
          <p className="text-xs text-gray-500">US phone numbers only (10-11 digits)</p>
        </div>
      </div>
      
      {/* Trust message */}
      <div className="bg-emerald-50 rounded-xl p-4 max-w-2xl mx-auto">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0">
            <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
              <Check className="h-4 w-4 text-white" />
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-emerald-800">Your information is secure</p>
            <p className="text-xs text-emerald-700 mt-1">
              We use bank-level encryption and never share your contact details with third parties.
            </p>
          </div>
        </div>
      </div>

      {/* Debug info - remove in production */}
      {process.env.NODE_ENV === 'development' && (
        <div className="text-xs text-gray-500 text-center">
          Debug: Email valid: {isEmailValid.toString()}, Phone valid: {isPhoneValid.toString()}, Step complete: {isStepComplete.toString()}
        </div>
      )}
    </div>
  );
}