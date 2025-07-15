import { DollarSign } from "lucide-react";
import { cn } from "@/lib/utils"; // Adjust the import path as necessary

interface LoanAmountStepProps {
  formData: any;
  handleOptionSelect: (field: string, value: string) => void;
}

export default function LoanAmountStep({ formData, handleOptionSelect }: LoanAmountStepProps) {
  return (
    <div className="space-y-8">
      <div className="text-center">
       <h3 className="text-3xl font-bold text-gray-800 mb-3">How much do you need?</h3>
        <p className="text-lg text-gray-600">Select your loan amount</p>
      </div>
      
      <div className="max-w-2xl mx-auto space-y-4">
        {[
          { value: 'up-to-500', label: 'Up to $500' },
          { value: '500-1000', label: '$500 - $1,000' },
          { value: '1000-2500', label: '$1,000 - $2,500' },
          { value: '2500-5000', label: '$2,500 - $5,000' },
          { value: '5000-10000', label: '$5,000 - $10,000' },
          { value: '10000-plus', label: 'More than $10,000' }
        ].map((option) => (
          <button
            key={option.value}
            onClick={() => handleOptionSelect('loanAmount', option.value)}
            className={cn(
              "group w-full px-10 py-6 text-lg font-semibold rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105",
              formData.loanAmount === option.value
                ? "bg-emerald-500 hover:bg-emerald-400 text-white shadow-emerald-500/25"
                : "bg-white hover:bg-emerald-50 text-gray-800 hover:text-emerald-700 border-2 border-gray-200 hover:border-emerald-400 hover:shadow-emerald-500/10"
            )}
          >
            <span className="flex items-center justify-center">
              {option.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}