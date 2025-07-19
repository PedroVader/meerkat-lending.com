import { User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface YourNameStepProps {
  formData: any;
  handleInputChange: (field: string, value: any) => void;
  handleNext: () => void;
  isStepValid: () => boolean;
}

export default function YourNameStep({
  formData,
  handleInputChange,
  handleNext,
  isStepValid,
}: YourNameStepProps) {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && isStepValid()) {
      e.preventDefault();
      handleNext();
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center mt-5">
        <h3 className="text-3xl font-bold text-gray-800 mb-1">Your Name</h3>
        <p className="text-base text-gray-500">No nicknames or initials—use full name.</p>
      </div>

      <div className="max-w-md mx-auto space-y-4">
        <Input
          type="text"
          placeholder="First Name"
          value={formData.firstName}
          onChange={(e) => handleInputChange("firstName", e.target.value)}
          onKeyPress={handleKeyPress}
          className={cn(
            "w-full px-6 py-4 text-lg border-2 rounded-full transition-all duration-150",
            formData.firstName
              ? "border-emerald-500 bg-white text-gray-900"
              : "border-gray-200 bg-white text-gray-700 focus:border-emerald-500"
          )}
        />

        <Input
          type="text"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={(e) => handleInputChange("lastName", e.target.value)}
          onKeyPress={handleKeyPress}
          className={cn(
            "w-full px-6 py-4 text-lg border-2 rounded-full transition-all duration-150",
            formData.lastName
              ? "border-emerald-500 bg-white text-gray-900"
              : "border-gray-200 bg-white text-gray-700 focus:border-emerald-500"
          )}
        />
      </div>

      <div className="text-center text-sm text-gray-700">
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
