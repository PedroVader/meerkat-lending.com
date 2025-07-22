"use client";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface MonthlyIncomeStepProps {
  formData: any;
  handleOptionSelect: (field: string, value: string) => void;
}

export default function MonthlyIncomeStep({ formData, handleOptionSelect }: MonthlyIncomeStepProps) {
  const options = [
    { value: '$0 - $1,500', label: '$0 - $1,500' },
    { value: '$1,500 - $2,500', label: '$1,500 - $2,500' },
    { value: '$2,500 - $3,500', label: '$2,500 - $3,500' },
    { value: '$3,500 - $4,500', label: '$3,500 - $4,500' },
    { value: '$4,500 - $5,500', label: '$4,500 - $5,500' },
    { value: '$5,500+', label: '$5,500+' }
  ];

  return (
    <div className="space-y-6 text-center">
      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          Monthly Income
        </h3>
        <p className="text-gray-600">What's your monthly income before taxes?</p>
      </div>
      
      <div className="max-w-md mx-auto space-y-4">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => handleOptionSelect('monthlyIncome', option.value)}
            className={cn(
              "w-full flex justify-between items-center px-6 py-4 border-2 rounded-full font-medium text-base transition-all duration-200",
              formData.monthlyIncome === option.value
                ? "bg-emerald-600 text-white shadow-lg"
                : "border-gray-300 hover:border-emerald-400 hover:bg-emerald-50"
            )}
          >
            <span>{option.label}</span>
            <ArrowRight
              className={cn(
                "ml-2 h-5 w-5",
                formData.monthlyIncome === option.value ? "text-white" : "text-emerald-600"
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