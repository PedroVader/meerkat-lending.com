"use client";

import { useState } from "react";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface NextPaydateStepProps {
  formData: any;
  handleInputChange: (field: string, value: any) => void;
  handleNext: () => void;
  isStepValid: () => boolean;
}

export default function NextPaydateStep({
  formData,
  handleInputChange,
  handleNext,
  isStepValid,
}: NextPaydateStepProps) {
  const [open, setOpen] = useState(false);

  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      handleInputChange("nextPayDate", date);
      setOpen(false);
    }
  };

  const dateSelected = !!formData.nextPayDate;

  return (
    <div className="space-y-8 text-center mt-5">
      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          When Is Your Next Paydate?
        </h3>
        <p className="text-gray-600 text-sm">
          Select the next date you’ll receive payment.
        </p>
      </div>

      <div className="flex justify-center">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-full md:w-[300px] justify-start text-left font-normal text-base p-4 border-2 rounded-xl",
                !dateSelected && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-5 w-5" />
              {dateSelected
                ? format(formData.nextPayDate, "PPP")
                : "Select date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0 shadow-xl border-emerald-200">
            <Calendar
              mode="single"
              selected={formData.nextPayDate}
              onSelect={handleDateSelect}
              disabled={(date) =>
                date < new Date() || date.getDay() === 0 || date.getDay() === 6
              }
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      {dateSelected && (
        <div className="text-emerald-600 font-medium text-sm">
          ✅ You're almost there! Just a few more steps to get your loan.
        </div>
      )}

      <div>
        <Button
          onClick={handleNext}
          disabled={!isStepValid()}
          className={cn(
            "mt-4 px-10 py-4 text-white rounded-full transition-all",
            isStepValid()
              ? "bg-emerald-600 hover:bg-emerald-500"
              : "bg-gray-300 cursor-not-allowed"
          )}
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
