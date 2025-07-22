"use client";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccountTypeStepProps {
  formData: any;
  handleOptionSelect: (field: string, value: string) => void;
}

export default function AccountTypeStep({ formData, handleOptionSelect }: AccountTypeStepProps) {
  const options = [
    { value: 'Checking', label: 'Checking Account' },
    { value: 'Savings', label: 'Savings Account' }
  ];

  return (
    <div className="space-y-6 text-center">
      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          Bank Account Type
        </h3>
        <p className="text-gray-600">Select your account type</p>
      </div>
      
      <div className="max-w-md mx-auto space-y-4">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => handleOptionSelect('accountType', option.value)}
            className={cn(
              "w-full flex justify-between items-center px-6 py-4 border-2 rounded-full font-medium text-base transition-all duration-200",
              formData.accountType === option.value
                ? "bg-emerald-600 text-white shadow-lg"
                : "border-gray-300 hover:border-emerald-400 hover:bg-emerald-50"
            )}
          >
            <span>{option.label}</span>
            <ArrowRight
              className={cn(
                "ml-2 h-5 w-5",
                formData.accountType === option.value ? "text-white" : "text-emerald-600"
              )}
            />
          </button>
        ))}
      </div>

      <div className="pt-6 border-t border-gray-200 text-sm text-gray-500">
        Join our community of happy customers!
        <div className="mt-2 text-xs">
          256-bit SSL
        </div>
      </div>
    </div>
  );
}