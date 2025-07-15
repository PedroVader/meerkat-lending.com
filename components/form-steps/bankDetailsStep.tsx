import { Lock, Shield } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface BankDetailsStepProps {
  formData: any;
  handleInputChange: (field: string, value: any) => void;
}

export default function BankDetailsStep({ formData, handleInputChange }: BankDetailsStepProps) {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <Lock className="h-12 w-12 text-emerald-600 mx-auto mb-3" />
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Bank Account Details</h3>
        <p className="text-gray-600">Your data is secure with 256-bit encryption</p>
      </div>
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="bg-emerald-50 p-4 rounded-xl">
          <div className="flex items-center gap-3">
            <Shield className="h-5 w-5 text-emerald-600" />
            <div>
              <p className="text-sm font-semibold text-emerald-800">Bank-Level Security</p>
              <p className="text-xs text-emerald-700">Your information is protected using industry-standard encryption</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <Label htmlFor="routingNumber" className="text-base font-medium mb-2 block">
              ABA/Routing Number
            </Label>
            <Input
              id="routingNumber"
              type="text"
              placeholder="123456789"
              value={formData.routingNumber}
              onChange={(e) => handleInputChange('routingNumber', e.target.value)}
              className="text-base p-4 text-center"
              maxLength={9}
            />
          </div>
          <div>
            <Label htmlFor="accountNumber" className="text-base font-medium mb-2 block">
              Account Number
            </Label>
            <Input
              id="accountNumber"
              type="text"
              placeholder="Account Number"
              value={formData.accountNumber}
              onChange={(e) => handleInputChange('accountNumber', e.target.value)}
              className="text-base p-4 text-center"
            />
          </div>
        </div>
        <p className="text-xs text-gray-600 text-center">
          Your routing number can be found on your bank statements or at the bottom of your checks
        </p>
      </div>
    </div>
  );
}