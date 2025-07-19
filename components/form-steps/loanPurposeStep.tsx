import { FileText, ArrowRight } from "lucide-react";
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
  isStepValid,
}: LoanPurposeStepProps) {
  const options = [
    { value: "Credit Card Consolidation", label: "Credit Card Consolidation" },
    { value: "Debt", label: "Debt Consolidation" },
    { value: "Home Improvement", label: "Home Improvement" },
    { value: "Medical Expenses", label: "Medical Expenses" },
    { value: "Auto Expenses", label: "Auto Expenses" },
    { value: "Other", label: "Other" }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <FileText className="h-10 w-10 text-emerald-600 mx-auto mb-3" />
        <h3 className="text-3xl font-bold text-gray-800 mb-1">What Is This Loan For?</h3>
      </div>

      <div className="max-w-md mx-auto space-y-4">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => handleOptionSelect("loanPurpose", option.value)}
            className={cn(
              "group w-full px-6 py-4 text-lg font-medium rounded-full transition-all duration-150 flex items-center justify-between",
              formData.loanPurpose === option.value
                ? "bg-emerald-500 text-white shadow-md"
                : "bg-white text-gray-800 border border-gray-200 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-300"
            )}
          >
            <span>{option.label}</span>
            <ArrowRight
              className={cn(
                "ml-2 h-5 w-5 transition-transform duration-150",
                formData.loanPurpose === option.value ? "text-white" : "text-gray-400 group-hover:translate-x-1"
              )}
            />
          </button>
        ))}

        {formData.loanPurpose === "Other" && (
          <div className="mt-6">
            <Input
              placeholder="Please specify your loan purpose"
              value={formData.loanPurposeOther}
              onChange={(e) => handleInputChange("loanPurposeOther", e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && isStepValid() && handleNext()}
              className="w-full px-6 py-4 text-lg rounded-full border-2 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 text-center shadow transition-all duration-300"
              autoFocus
            />
          </div>
        )}
      </div>

      <p className="max-w-md mx-auto text-sm text-center text-gray-500 mt-6">
        This helps lenders or lender-networks to understand the purpose of your loan request. Please select the option that best describes the reason for your loan.
      </p>

      <div className="text-center text-sm text-gray-700 mt-8">
        <p className="mb-2 font-medium">Join our community of happy customers!</p>
        <div className="flex items-center justify-center gap-2 mb-3">
          <img src="/avatars/avatar1.png" className="w-8 h-8 rounded-full" alt="user" />
          <img src="/avatars/avatar2.png" className="w-8 h-8 rounded-full" alt="user" />
          <img src="/avatars/avatar3.png" className="w-8 h-8 rounded-full" alt="user" />
          <img src="/avatars/avatar4.png" className="w-8 h-8 rounded-full" alt="user" />
          <span className="ml-1 font-semibold text-gray-600">1K</span>
        </div>

        <div className="inline-flex items-center gap-1 text-xs text-gray-500 border border-gray-200 px-3 py-1 rounded-full">
          <svg className="h-3 w-3 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 11c0 .35-.06.687-.17 1a4 4 0 01-7.66-1c0-2.21 1.79-4 4-4 .657 0 1.27.158 1.81.438a4.006 4.006 0 012.02 3.562z" />
            <path d="M12 21c-4.97 0-9-4.03-9-9S7.03 3 12 3s9 4.03 9 9c0 .861-.109 1.697-.315 2.488M15 21h6v-6" />
          </svg>
          256-bit SSL
        </div>
      </div>
    </div>
  );
}
