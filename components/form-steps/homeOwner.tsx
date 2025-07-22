"use client";

import { Home } from "lucide-react";
import { cn } from "@/lib/utils";

interface HomeOwnerStepProps {
  formData: any;
  handleOptionSelect: (field: string, value: string) => void;
}

export default function HomeOwnerStep({
  formData,
  handleOptionSelect,
}: HomeOwnerStepProps) {
  const options = [
    { label: "Yes", value: "YES" },
    { label: "No", value: "NO" },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mt-5">
        <h3 className="text-3xl font-bold text-gray-800 mb-3">
          Are you a homeowner?
        </h3>
        <p className="text-lg text-gray-600">
          This helps lenders evaluate your loan eligibility.
        </p>
      </div>

      <div className="flex justify-center gap-6 flex-wrap">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => handleOptionSelect("homeOwner", option.value)}
            className={cn(
              "px-6 py-3 rounded-full text-lg font-medium border-2 transition-all duration-200",
              formData.homeOwner === option.value
                ? "bg-emerald-500 text-white border-emerald-500 shadow"
                : "bg-white text-gray-700 border-gray-300 hover:border-emerald-400 hover:text-emerald-600"
            )}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
