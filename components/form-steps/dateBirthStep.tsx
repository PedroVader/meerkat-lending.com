"use client";

import { Calendar } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface DateBirthStepProps {
  formData: any;
  handleInputChange: (field: string, value: any) => void;
  handleNext: () => void;
  isStepValid: () => boolean;
}

export default function DateBirthStep({
  formData,
  handleInputChange,
  handleNext,
  isStepValid
}: DateBirthStepProps) {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleInputChange("dateOfBirth", e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && isStepValid()) {
      e.preventDefault();
      handleNext();
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center mt-5">
        <h3 className="text-3xl font-bold text-gray-800 mb-3">When's your date of birth?</h3>
        <p className="text-lg text-gray-600">
          Lenders use your age to determine eligibility
        </p>
      </div>

      <div className="max-w-md mx-auto space-y-4">
        <Input
          type="date"
          value={formData.dateOfBirth || ""}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className={cn(
            "w-full px-6 py-4 text-lg border-2 rounded-full transition-all duration-150",
            formData.dateOfBirth
              ? "border-emerald-500 bg-white text-gray-900"
              : "border-gray-200 bg-white text-gray-700 focus:border-emerald-500"
          )}
        />
      </div>
    </div>
  );
}
