import { Briefcase } from "lucide-react";
import { cn } from "@/lib/utils"; // Adjust the import path as necessary

interface IncomeTypeStepProps {
  formData: any;
  handleOptionSelect: (field: string, value: string) => void;
}

export default function IncomeTypeStep({ formData, handleOptionSelect }: IncomeTypeStepProps) {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <Briefcase className="h-12 w-12 text-emerald-600 mx-auto mb-3" />
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Income Type</h3>
        <p className="text-gray-600">What's your primary source of income?</p>
      </div>
      <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto">
        {[
          { value: 'employment', label: 'Employment', icon: '💼' },
          { value: 'benefits', label: 'Benefits', icon: '📋' },
          { value: 'military', label: 'Military', icon: '🎖️' },
          { value: 'self-employed', label: 'Self Employed', icon: '👔' },
          { value: 'retirement', label: 'Retirement', icon: '🏖️' },
          { value: 'other', label: 'Other', icon: '📝' }
        ].map((option) => (
          <button
            key={option.value}
            onClick={() => handleOptionSelect('incomeType', option.value)}
            className={cn(
              "p-4 border-2 rounded-xl font-semibold text-base transition-all duration-200 hover:scale-105 hover:shadow-md flex flex-col items-center gap-2",
              formData.incomeType === option.value
                ? "border-emerald-600 bg-emerald-50 text-emerald-700 shadow-md"
                : "border-gray-200 hover:border-emerald-400 hover:bg-emerald-50/50"
            )}
          >
            <span className="text-2xl">{option.icon}</span>
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}