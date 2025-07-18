import { Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

interface IncomeTypeStepProps {
  formData: any;
  handleOptionSelect: (field: string, value: string) => void;
}

export default function IncomeTypeStep({ formData, handleOptionSelect }: IncomeTypeStepProps) {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Income Type</h3>
        <p className="text-gray-600">What's your primary source of income?</p>
      </div>
      
      <div className="max-w-md mx-auto space-y-3">
        {[
          { value: 'employment', label: 'Employment'},
          { value: 'benefits', label: 'Benefits' },
          { value: 'military', label: 'Military' },
          { value: 'self-employed', label: 'Self Employed' },
          { value: 'retirement', label: 'Retirement' },
          { value: 'other', label: 'Other' }
        ].map((option) => (
          <button
            key={option.value}
            onClick={() => handleOptionSelect('incomeType', option.value)}
            className={cn(
              "w-full p-4 border-2 justify-center rounded-xl font-medium text-center transition-all duration-200 flex items-center gap-3",
              formData.incomeType === option.value
                ? "border-emerald-600 bg-emerald-50 text-emerald-700 shadow-md"
                : "border-gray-200 hover:border-emerald-400 hover:bg-emerald-50/50"
            )}
          >
            <span className="text-base">{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}