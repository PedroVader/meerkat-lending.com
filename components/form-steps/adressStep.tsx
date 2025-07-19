import { MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface AddressStepProps {
  formData: any;
  handleInputChange: (field: string, value: any) => void;
}

export default function AddressStep({ formData, handleInputChange }: AddressStepProps) {
  return (
    <div className="space-y-8">
      <div className="text-center mt-5">
        <h3 className="text-3xl font-bold text-gray-800 mb-1">What Is Your Street Address?</h3>
      </div>

      <div className="max-w-md mx-auto space-y-6">
        {/* ZIP Code */}
        <div>
          <p className="text-xs font-medium text-gray-500 mb-1 uppercase tracking-wide">ZIP CODE</p>
          <Input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            placeholder="12345"
            value={formData.zipCode || ''}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const value = e.target.value.replace(/\D/g, '');
              if (value.length <= 5) {
                handleInputChange('zipCode', value);
              }
            }}
            className={cn(
              "w-full px-6 py-4 text-lg border-2 rounded-full transition-all duration-150 text-center tracking-wider",
              formData.zipCode
                ? "border-emerald-500 text-gray-900"
                : "border-gray-200 text-gray-700 focus:border-emerald-500"
            )}
          />
        </div>

        {/* Street Address */}
        <div>
          <p className="text-xs font-medium text-gray-500 mb-1 uppercase tracking-wide">STREET ADDRESS</p>
          <Input
            type="text"
            placeholder="123 Main Street, City"
            value={formData.address || ''}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleInputChange('address', e.target.value)
            }
            className={cn(
              "w-full px-6 py-4 text-lg border-2 rounded-full transition-all duration-150 text-center",
              formData.address
                ? "border-emerald-500 text-gray-900"
                : "border-gray-200 text-gray-700 focus:border-emerald-500"
            )}
          />
        </div>
      </div>

      {/* Comunidad + SSL */}
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
