"use client";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PaymentScheduleStepProps {
  formData: any;
  handleInputChange: (field: string, value: any) => void;
  handleOptionSelect: (field: string, value: string) => void;
}

export default function PaymentScheduleStep({ formData, handleInputChange, handleOptionSelect }: PaymentScheduleStepProps) {
  const options = [
    { value: 'Weekly', label: 'Weekly' },
    { value: 'Bi-Weekly', label: 'Every 2 weeks' },
    { value: 'Twice-Monthly', label: 'Twice a month' },
    { value: 'Monthly', label: 'Monthly' }
  ];

  return (
    <div className="space-y-6 text-center">
      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          Payment Schedule
        </h3>
        <p className="text-gray-600">When do you receive your income?</p>
      </div>
      
      <div className="max-w-md mx-auto space-y-4">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => handleOptionSelect('payFrequency', option.value)}
            className={cn(
              "w-full flex justify-between items-center px-6 py-4 border-2 rounded-full font-medium text-base transition-all duration-200",
              formData.payFrequency === option.value
                ? "bg-emerald-600 text-white shadow-lg"
                : "border-gray-300 hover:border-emerald-400 hover:bg-emerald-50"
            )}
          >
            <span>{option.label}</span>
            <ArrowRight
              className={cn(
                "ml-2 h-5 w-5",
                formData.payFrequency === option.value ? "text-white" : "text-emerald-600"
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