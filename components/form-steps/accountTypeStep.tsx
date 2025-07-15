import { Banknote } from "lucide-react";
import { cn } from "@/lib/utils"; // Adjust the import path as necessary

interface AccountTypeStepProps {
  formData: any;
  handleOptionSelect: (field: string, value: string) => void;
}

export default function AccountTypeStep({ formData, handleOptionSelect }: AccountTypeStepProps) {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <Banknote className="h-12 w-12 text-emerald-600 mx-auto mb-3" />
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Bank Account Type</h3>
        <p className="text-gray-600">Select your account type</p>
      </div>
      <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
        <button
          onClick={() => handleOptionSelect('accountType', 'checking')}
          className={cn(
            "p-6 border-2 rounded-xl font-semibold text-base transition-all duration-200 hover:scale-105 hover:shadow-md flex items-center justify-between",
            formData.accountType === 'checking'
              ? "border-emerald-600 bg-emerald-50 text-emerald-700 shadow-md"
              : "border-gray-200 hover:border-emerald-400 hover:bg-emerald-50/50"
          )}
        >
          Checking Account
          <span className="text-2xl">✅</span>
        </button>
        <button
          onClick={() => handleOptionSelect('accountType', 'savings')}
          className={cn(
            "p-6 border-2 rounded-xl font-semibold text-base transition-all duration-200 hover:scale-105 hover:shadow-md flex items-center justify-between",
            formData.accountType === 'savings'
              ? "border-emerald-600 bg-emerald-50 text-emerald-700 shadow-md"
              : "border-gray-200 hover:border-emerald-400 hover:bg-emerald-50/50"
          )}
        >
          Savings Account
          <span className="text-2xl">💰</span>
        </button>
      </div>
    </div>
  );
}