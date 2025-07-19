import { cn } from "@/lib/utils";

interface AccountTypeStepProps {
  formData: any;
  handleOptionSelect: (field: string, value: string) => void;
}

export default function AccountTypeStep({ formData, handleOptionSelect }: AccountTypeStepProps) {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Bank Account Type</h3>
        <p className="text-gray-600">Select your account type</p>
      </div>
      
      <div className="max-w-md mx-auto space-y-3">
        <button
          onClick={() => handleOptionSelect('accountType', 'Checking')}
          className={cn(
            "w-full p-4 border-2 rounded-xl font-medium text-center transition-all duration-200",
            formData.accountType === 'checking'
              ? "border-emerald-600 bg-emerald-50 text-emerald-700 shadow-md"
              : "border-gray-200 hover:border-emerald-400 hover:bg-emerald-50/50"
          )}
        >
          Checking Account
        </button>
        
        <button
          onClick={() => handleOptionSelect('accountType', 'Savings')}
          className={cn(
            "w-full p-4 border-2 rounded-xl font-medium text-center transition-all duration-200",
            formData.accountType === 'savings'
              ? "border-emerald-600 bg-emerald-50 text-emerald-700 shadow-md"
              : "border-gray-200 hover:border-emerald-400 hover:bg-emerald-50/50"
          )}
        >
          Savings Account
        </button>
      </div>
    </div>
  );
}