import { CreditCard } from "lucide-react";
import { cn } from "@/lib/utils"; // Adjust the import path as necessary

interface CreditScoreStepProps {
  formData: any;
  handleOptionSelect: (field: string, value: string) => void;
}

export default function CreditScoreStep({ formData, handleOptionSelect }: CreditScoreStepProps) {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-gray-800 mb-3">What's your credit score?</h3>
        <p className="text-lg text-gray-600">This helps us find your best rates</p>
      </div>
      
      <div className="max-w-2xl mx-auto space-y-4">
        {[
          { value: 'excellent', label: 'Excellent Credit', subtitle: '720-850' },
          { value: 'good', label: 'Good Credit', subtitle: '690-719' },
          { value: 'fair', label: 'Fair Credit', subtitle: '630-689' },
          { value: 'poor', label: 'Poor Credit', subtitle: '300-629' },
          { value: 'unsure', label: "I'm not sure", subtitle: 'Check for free' }
        ].map((option) => (
          <button
            key={option.value}
            onClick={() => handleOptionSelect('creditScore', option.value)}
            className={cn(
              "group w-full px-10 py-6 text-lg font-semibold rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-between",
              formData.creditScore === option.value
                ? "bg-emerald-500 hover:bg-emerald-400 text-white shadow-emerald-500/25"
                : "bg-white hover:bg-emerald-50 text-gray-800 hover:text-emerald-700 border-2 border-gray-200 hover:border-emerald-400 hover:shadow-emerald-500/10"
            )}
          >
            <div className="text-left flex-1">
              <div className="font-semibold">{option.label}</div>
              <div className={cn(
                "text-sm font-normal mt-1",
                formData.creditScore === option.value
                  ? "text-white/80"
                  : "text-gray-500 group-hover:text-emerald-600"
              )}>
                {option.subtitle}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}