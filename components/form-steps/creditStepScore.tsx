import { CreditCard, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CreditScoreStepProps {
  formData: any;
  handleOptionSelect: (field: string, value: string) => void;
}

export default function CreditScoreStep({ formData, handleOptionSelect }: CreditScoreStepProps) {
  const options = [
    { value: "Excellent", label: "Excellent Credit", subtitle: "(720–850)" },
    { value: "Good", label: "Good Credit", subtitle: "(690–719)" },
    { value: "Fair", label: "Fair Credit", subtitle: "(630–689)" },
    { value: "Poor", label: "Bad Credit", subtitle: "(300–629)" },
    { value: "Unsure", label: "Not Sure", subtitle: "" }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mt-5">
        <h3 className="text-3xl font-bold text-gray-800 mb-1">What Is Your Credit Score?</h3>
      </div>

      <div className="max-w-md mx-auto space-y-4">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => handleOptionSelect("creditScore", option.value)}
            className={cn(
              "group w-full px-6 py-4 text-lg rounded-full font-medium transition-all duration-150 flex items-center justify-between",
              formData.creditScore === option.value
                ? "bg-emerald-500 text-white shadow-md"
                : "bg-white text-gray-800 border border-gray-200 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-300"
            )}
          >
            <span>
              {option.label}{" "}
              {option.subtitle && (
                <span
                  className={cn(
                    "ml-1 text-sm font-normal",
                    formData.creditScore === option.value ? "text-white/80" : "text-gray-500"
                  )}
                >
                  {option.subtitle}
                </span>
              )}
            </span>

            <ArrowRight
              className={cn(
                "ml-2 h-5 w-5 transition-transform duration-150",
                formData.creditScore === option.value ? "text-white" : "text-gray-400 group-hover:translate-x-1"
              )}
            />
          </button>
        ))}
      </div>

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
