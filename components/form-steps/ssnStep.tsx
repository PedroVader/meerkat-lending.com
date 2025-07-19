"use client";

import { ShieldCheck, Check, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

interface SSNStepProps {
  formData: any;
  handleInputChange: (field: string, value: any) => void;
  handleNext: () => void;
  isStepValid: () => boolean;
}

export default function SSNStep({
  formData,
  handleInputChange,
  handleNext,
  isStepValid,
}: SSNStepProps) {
  const [ssnError, setSsnError] = useState("");

  const formatSSN = (raw: string) => {
    const digits = raw.replace(/\D/g, "");
    const limited = digits.slice(0, 9);

    let formatted = limited;
    if (limited.length > 5) {
      formatted = `${limited.slice(0, 3)}-${limited.slice(3, 5)}-${limited.slice(5)}`;
    } else if (limited.length > 3) {
      formatted = `${limited.slice(0, 3)}-${limited.slice(3)}`;
    }
    return formatted;
  };

  const validateSSN = (raw: string) => {
    const digits = raw.replace(/\D/g, "");
    if (!digits) {
      setSsnError("");
      return "";
    }
    if (digits.length < 9) {
      setSsnError("SSN must be 9 digits");
    } else if (/^(\d)\1{8}$/.test(digits)) {
      setSsnError("Invalid SSN (repeated digits)");
    } else if (/^(123-45-6789|000|666|9\\d{2})-\\d{2}-\\d{4}/.test(raw)) {
      setSsnError("Invalid or reserved SSN");
    } else {
      setSsnError("");
    }
    return formatSSN(raw);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = validateSSN(e.target.value);
    handleInputChange("ssn", formatted);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (!ssnError && formData.ssn?.replace(/\D/g, "").length === 9) {
        handleNext();
      }
    }
  };

  const isValid = formData.ssn?.replace(/\D/g, "").length === 9 && !ssnError;

  useEffect(() => {
    if (formData.ssn) {
      validateSSN(formData.ssn);
    }
  }, [formData.ssn]);

  return (
    <div className="space-y-8">
      <div className="text-center mt-5">
        <h3 className="text-3xl font-bold text-gray-800 mb-3">Social Security Number</h3>
        <p className="text-lg text-gray-600 mb-4">
          Many lenders need your Social Security Number to approve your loan.
        </p>
        <p className="text-sm text-gray-500 italic">
          This site is secured by SSL certificate. An industry standard for site and information security.
        </p>
      </div>

      <div className="max-w-md mx-auto space-y-2">
        <Label htmlFor="ssn">SSN</Label>
        <div className="relative">
          <Input
            id="ssn"
            type="text"
            inputMode="numeric"
            maxLength={11}
            autoFocus
            placeholder="123-45-6789"
            value={formData.ssn}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            className={cn(
              "w-full px-6 py-4 text-lg border-2 rounded-full pr-12 transition-all duration-150",
              formData.ssn && !ssnError
                ? "border-emerald-500"
                : ssnError
                ? "border-red-500"
                : "border-gray-200 focus:border-emerald-500"
            )}
          />
          {formData.ssn && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              {isValid ? (
                <Check className="h-5 w-5 text-green-500" />
              ) : (
                <X className="h-5 w-5 text-red-500" />
              )}
            </div>
          )}
        </div>

        {ssnError && <p className="text-sm text-red-500">{ssnError}</p>}
        {isValid && <p className="text-sm text-green-600">✓ SSN looks good</p>}
      </div>
    </div>
  );
}
