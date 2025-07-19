import { Smartphone, Check, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

interface CellPhoneNumberStepProps {
  formData: any;
  handleInputChange: (field: string, value: any) => void;
  handleNext: () => void;
  isStepValid: () => boolean;
}

export default function CellPhoneNumberStep({
  formData,
  handleInputChange,
  handleNext,
  isStepValid,
}: CellPhoneNumberStepProps) {
  const [phoneError, setPhoneError] = useState("");

  const validateAndFormatPhone = (input: string) => {
    const digits = input.replace(/\D/g, ""); // Remove non-digits

    // Empty
    if (!digits) {
      setPhoneError("Phone number is required");
      return "";
    }

    // Length checks
    if (digits.length < 10) {
      setPhoneError("10 digits required");
      return formatPartial(digits);
    }
    if (digits.length > 11) {
      setPhoneError("Too many digits");
      return formatPartial(digits.slice(0, 11));
    }

    // 11-digit must start with 1
    if (digits.length === 11 && digits[0] !== "1") {
      setPhoneError("11-digit number must start with 1");
      return formatPartial(digits);
    }

    setPhoneError("");
    return formatUSNumber(digits);
  };

  const formatUSNumber = (digits: string) => {
    if (digits.length === 10) {
      return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
    }
    if (digits.length === 11) {
      // Remove leading 1 for display if present
      const withoutCountry = digits.slice(1);
      return `+1 (${withoutCountry.slice(0, 3)}) ${withoutCountry.slice(3, 6)}-${withoutCountry.slice(6)}`;
    }
    return digits;
  };

  const formatPartial = (digits: string) => {
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    const formatted = validateAndFormatPhone(raw);
    handleInputChange("phone", formatted);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && isStepValid() && !phoneError) {
      e.preventDefault();
      handleNext();
    }
  };

  const isPhoneValid =
    formData.phone &&
    !phoneError &&
    /^\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{4}$/.test(formData.phone.replace(/\D/g, ""));

  useEffect(() => {
    if (formData.phone) {
      validateAndFormatPhone(formData.phone);
    }
  }, [formData.phone]);

  return (
    <div className="space-y-8">
      <div className="text-center mt-5">
        <h3 className="text-3xl font-bold text-gray-800 mb-3">
          What's your cell phone number?
        </h3>
        <p className="text-lg text-gray-600 mb-4">
          We may use this to send updates and verify your identity.
        </p>
      </div>

      <div className="max-w-md mx-auto space-y-4">
        <Label htmlFor="phone" className="text-base font-medium">
          Phone Number
        </Label>
        <div className="relative">
          <Input
            id="phone"
            type="tel"
            inputMode="tel"
            placeholder="(123) 456-7890"
            value={formData.phone}
            onChange={handlePhoneChange}
            onKeyPress={handleKeyPress}
            maxLength={18} // (123) 456-7890 or +1 (123) 456-7890
            className={cn(
              "w-full px-6 py-4 text-lg pr-12 rounded-full border-2 transition-colors",
              formData.phone
                ? isPhoneValid
                  ? "border-green-500 focus:border-green-500"
                  : "border-red-500 focus:border-red-500"
                : "border-gray-200 focus:border-emerald-500"
            )}
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

        {phoneError && <p className="text-sm text-red-500">{phoneError}</p>}
        {isPhoneValid && (
          <p className="text-sm text-green-600">✓ Valid US phone number</p>
        )}
        <p className="text-xs text-gray-500">US numbers only (10–11 digits)</p>
      </div>

      <p className="text-sm text-gray-500 italic px-4 text-center">
        This site uses modern web tracking technology (cookies, web beacons, pixels, etc.) to capture site visits and engagement, which you agree to allow by using this form. By clicking "CONTINUE", you are electronically signing and consent to our affiliates and marketing partners to contact you via text or voice using an automatic dialing system. Message and data rates may apply. You can opt out any time by replying "stop".
      </p>
    </div>
  );
}