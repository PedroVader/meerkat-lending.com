import { Mail, Check, X, AlertCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { useState, useEffect, useMemo } from "react";

interface EmailAddressStepProps {
  formData: any;
  handleInputChange: (field: string, value: any) => void;
  handleNext: () => void;
  isStepValid: () => boolean;
}

export default function EmailAddressStep({
  formData,
  handleInputChange,
  handleNext,
  isStepValid,
}: EmailAddressStepProps) {
  const [consent, setConsent] = useState(true);
  const [emailError, setEmailError] = useState('');
  const [touched, setTouched] = useState(false);

  // Email validation function
  const validateEmail = (email: string) => {
    if (!email) {
      return 'Email address is required';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address';
    }

    // Additional validation for common issues
    if (email.includes('..')) {
      return 'Email cannot contain consecutive dots';
    }

    if (email.startsWith('.') || email.endsWith('.')) {
      return 'Email cannot start or end with a dot';
    }

    // Check for valid domain
    const domain = email.split('@')[1];
    if (domain && !domain.includes('.')) {
      return 'Please include a valid domain (e.g., .com)';
    }

    return ''; // No error
  };

  // Memoize validation result
  const validationError = useMemo(() => {
    if (!touched) return '';
    return validateEmail(formData.email);
  }, [formData.email, touched]);

  // Update error state when validation changes
  useEffect(() => {
    setEmailError(validationError);
  }, [validationError]);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    handleInputChange("email", value);
  };

  const handleBlur = () => {
    setTouched(true);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setTouched(true);
      
      const error = validateEmail(formData.email);
      if (error) {
        setEmailError(error);
        return;
      }
      
      if (!consent) {
        setEmailError('Please accept the email consent to continue');
        return;
      }
      
      handleNext();
    }
  };

  // Auto-focus on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      const input = document.querySelector('input[type="email"]') as HTMLInputElement;
      input?.focus();
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const isEmailValid = formData.email && !emailError && touched;
  const canProceed = isEmailValid && consent;

  return (
    <div className="space-y-8">
      <div className="text-center mt-5">
        <h3 className="text-3xl font-bold text-gray-800 mb-1">Email Address</h3>
        <p className="text-gray-600 text-sm">We'll send your loan offers here</p>
      </div>

      <div className="max-w-md mx-auto space-y-4">
        <div className="relative">
          <Input
            type="email"
            placeholder="you@example.com"
            value={formData.email || ''}
            onChange={handleEmailChange}
            onKeyPress={handleKeyPress}
            onBlur={handleBlur}
            className={cn(
              "w-full px-6 py-4 text-lg border-2 rounded-full transition-all duration-150 pr-12",
              touched && emailError
                ? "border-red-500 focus:border-red-500"
                : formData.email && isEmailValid
                ? "border-green-500 focus:border-green-500"
                : "border-gray-200 focus:border-emerald-500"
            )}
          />
          
          {/* Validation icon */}
          {touched && formData.email && (
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              {!emailError ? (
                <Check className="h-5 w-5 text-green-500" />
              ) : (
                <X className="h-5 w-5 text-red-500" />
              )}
            </div>
          )}
        </div>

        {/* Error message */}
        {touched && emailError && (
          <div className="flex items-center gap-2 text-red-600 text-sm">
            <AlertCircle className="h-4 w-4 flex-shrink-0" />
            <span>{emailError}</span>
          </div>
        )}

        {/* Success message */}
        {isEmailValid && (
          <div className="flex items-center gap-2 text-green-600 text-sm">
            <Check className="h-4 w-4 flex-shrink-0" />
            <span>Valid email address</span>
          </div>
        )}

        {/* Consent checkbox */}
        <div className="mt-6">
          <label className="flex items-start space-x-2 text-sm text-gray-600 cursor-pointer">
            <Checkbox
              id="consentCheckbox"
              checked={consent}
              onCheckedChange={(val) => setConsent(Boolean(val))}
              className={cn(
                "mt-1",
                !consent && touched && emailError === 'Please accept the email consent to continue' && "border-red-500"
              )}
            />
            <span className="leading-relaxed">
              By checking this box, you agree to receive email from{" "}
              <strong>www.meerkatlending.com</strong> and affiliated brands that may be of interest to you.
            </span>
          </label>
          
          {/* Consent error */}
          {!consent && touched && emailError === 'Please accept the email consent to continue' && (
            <div className="flex items-center gap-2 text-red-600 text-sm mt-2 ml-6">
              <AlertCircle className="h-4 w-4 flex-shrink-0" />
              <span>Please accept to continue</span>
            </div>
          )}
        </div>

        {/* Continue instruction */}
        {canProceed && (
          <div className="text-center mt-4">
            <p className="text-xs text-gray-500">Press Enter to continue</p>
          </div>
        )}
      </div>

      <div className="text-center text-sm text-gray-700 mt-8">
        <p className="mb-2 font-medium">Join our community of happy customers!</p>
        <div className="flex items-center justify-center gap-2 mb-3">
          <img src="/avatars/avatar1.png" className="w-8 h-8 rounded-full border-2 border-white shadow-sm" alt="user" />
          <img src="/avatars/avatar2.png" className="w-8 h-8 rounded-full border-2 border-white shadow-sm" alt="user" />
          <img src="/avatars/avatar3.png" className="w-8 h-8 rounded-full border-2 border-white shadow-sm" alt="user" />
          <img src="/avatars/avatar4.png" className="w-8 h-8 rounded-full border-2 border-white shadow-sm" alt="user" />
          <span className="ml-1 font-semibold text-gray-600">1K+</span>
        </div>

        <div className="inline-flex items-center gap-1 text-xs text-gray-500 border border-gray-200 px-3 py-1 rounded-full">
          <svg className="h-3 w-3 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          256-bit SSL Secured
        </div>
      </div>
    </div>
  );
}