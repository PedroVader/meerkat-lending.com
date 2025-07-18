import { FileText } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface LoanPurposeStepProps {
  formData: any;
  handleOptionSelect: (field: string, value: string) => void;
  handleInputChange: (field: string, value: any) => void;
  handleNext: () => void;
  isStepValid: () => boolean;
}

export default function LoanPurposeStep({ 
  formData, 
  handleOptionSelect, 
  handleInputChange, 
  handleNext, 
  isStepValid 
}: LoanPurposeStepProps) {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-gray-800 mb-3">What's this loan for?</h3>
        <p className="text-lg text-gray-600">Help us understand your needs</p>
      </div>
      
      <div className="max-w-2xl mx-auto space-y-4">
        {[
          { value: 'credit-cards', label: 'Credit Card Consolidation' },
          { value: 'debt', label: 'Debt Consolidation'  },
          { value: 'home-improvement', label: 'Home Improvement' },
          { value: 'medical', label: 'Medical Expenses' },
          { value: 'auto', label: 'Auto Expenses' },
          { value: 'other', label: 'Other' }
        ].map((option) => (
          <button
            key={option.value}
            onClick={() => handleOptionSelect('loanPurpose', option.value)}
            className={cn(
              "group w-full px-10 py-4 text-lg font-semibold rounded-full transition-all duration-100 transform hover:scale-100 flex items-center justify-between",
              formData.loanPurpose === option.value
                ? "bg-emerald-500 hover:bg-emerald-400 text-white shadow-emerald-500/25"
                : "bg-white hover:bg-emerald-50 text-gray-800 hover:text-emerald-700 border-2 border-gray-200 hover:border-emerald-400 hover:shadow-emerald-500/10"
            )}
          >
            <span className="flex-1 text-center">{option.label}</span>
          </button>
        ))}
      </div>
      
      {formData.loanPurpose === 'other' && (
        <div className="max-w-2xl mx-auto mt-6">
          <Input
            placeholder="Please specify your loan purpose"
            value={formData.loanPurposeOther}
            onChange={(e) => handleInputChange('loanPurposeOther', e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && isStepValid() && handleNext()}
            className="w-full px-6 py-4 text-lg rounded-full border-2 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 text-center shadow-lg transition-all duration-300"
            autoFocus
          />
        </div>
      )}
    </div>
  );
}