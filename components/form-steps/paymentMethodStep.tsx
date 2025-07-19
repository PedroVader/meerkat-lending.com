import { cn } from "@/lib/utils";

interface PaymentMethodStepProps {
  formData: any;
  handleOptionSelect: (field: string, value: string) => void;
}

export default function PaymentMethodStep({ formData, handleOptionSelect }: PaymentMethodStepProps) {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">How do you receive your paycheck?</h3>
        <p className="text-gray-600">Select your payment method</p>
      </div>
      
      <div className="max-w-md mx-auto space-y-3">
        <button
          onClick={() => handleOptionSelect('paymentMethod', 'Direct Deposit')}
          className={cn(
            "w-full p-4 border-2 rounded-xl font-medium text-center transition-all duration-200",
            formData.paymentMethod === 'Direct Deposit'
              ? "border-emerald-600 bg-emerald-50 text-emerald-700 shadow-md"
              : "border-gray-200 hover:border-emerald-400 hover:bg-emerald-50/50"
          )}
        >
          Direct Deposit
        </button>
        
        <button
          onClick={() => handleOptionSelect('paymentMethod', 'Paper Check')}
          className={cn(
            "w-full p-4 border-2 rounded-xl font-medium text-center transition-all duration-200",
            formData.paymentMethod === 'Paper Check'
              ? "border-emerald-600 bg-emerald-50 text-emerald-700 shadow-md"
              : "border-gray-200 hover:border-emerald-400 hover:bg-emerald-50/50"
          )}
        >
          Paper Check
        </button>
      </div>
    </div>
  );
}