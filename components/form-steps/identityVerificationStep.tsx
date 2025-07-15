import { Banknote } from "lucide-react";
import { cn } from "@/lib/utils"; // Adjust the import path as necessary

interface MonthlyIncomeStepProps {
  formData: any;
  handleOptionSelect: (field: string, value: string) => void;
}

export default function MonthlyIncomeStep({ formData, handleOptionSelect }: MonthlyIncomeStepProps) {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <Banknote className="h-12 w-12 text-emerald-600 mx-auto mb-3" />
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Monthly Income</h3>
        <p className="text-gray-600">What's your monthly income before taxes?</p>
      </div>
      <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto">
        {[
          { value: '0-1500', label: '$0 - $1,500' },
          { value: '1500-2500', label: '$1,500 - $2,500' },
          { value: '2500-3500', label: '$2,500 - $3,500' },
          { value: '3500-4500', label: '$3,500 - $4,500' },
          { value: '4500-5500', label: '$4,500 - $5,500' },
          { value: '5500+', label: '$5,500+' }
        ].map((option) => (
          <button
            key={option.value}
            onClick={() => handleOptionSelect('monthlyIncome', option.value)}
            className={cn(
              "p-4 border-2 rounded-xl font-semibold text-base transition-all duration-200 hover:scale-105 hover:shadow-md",
              formData.monthlyIncome === option.value
                ? "border-emerald-600 bg-emerald-50 text-emerald-700 shadow-md"
                : "border-gray-200 hover:border-emerald-400 hover:bg-emerald-50/50"
            )}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}