import { Clock } from "lucide-react";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface PaymentScheduleStepProps {
  formData: any;
  handleInputChange: (field: string, value: any) => void;
  handleOptionSelect: (field: string, value: string) => void; // 👈 Añadido
}


export default function PaymentScheduleStep({ formData, handleInputChange, handleOptionSelect }: PaymentScheduleStepProps) {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Payment Schedule</h3>
        <p className="text-gray-600">When do you receive your income?</p>
      </div>
      
      <div className="max-w-md mx-auto space-y-6">
        {/* Pay Frequency */}
        <div className="space-y-3">
          <Label className="text-base font-medium">How often are you paid?</Label>
          <div className="space-y-3">
          {[
  { value: 'Weekly', label: 'Weekly' },
  { value: 'Bi-Weekly', label: 'Every 2 weeks' },
  { value: 'twice-monthly', label: 'Twice a month' },
  { value: 'Monthly', label: 'Monthly' }
].map((option) => (
  <button
    key={option.value}
    onClick={() => handleOptionSelect('payFrequency', option.value)}
    className={cn(
      "w-full p-4 border-2 rounded-xl font-medium text-center transition-all duration-200",
      formData.payFrequency === option.value
        ? "border-emerald-600 bg-emerald-50 text-emerald-700 shadow-md"
        : "border-gray-200 hover:border-emerald-400 hover:bg-emerald-50/50"
    )}
  >
    {option.label}
  </button>
))}

          </div>
        </div>
      </div>
    </div>
  );
}
