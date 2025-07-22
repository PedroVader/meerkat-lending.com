"use client";

import { useState } from "react";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface NextPaydateStepProps {
  formData: any;
  handleOptionSelect: (field: string, value: any) => void;
}

export default function NextPaydateStep({
  formData,
  handleOptionSelect,
}: NextPaydateStepProps) {
  const [open, setOpen] = useState(false);

  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      setOpen(false);
      // Usar handleOptionSelect que automáticamente avanza al siguiente paso
      handleOptionSelect("nextPayDate", date);
    }
  };

  // Verificar si la fecha es válida
  const dateSelected = formData.nextPayDate && formData.nextPayDate instanceof Date;

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          When Is Your Next Paydate?
        </h3>
        <p className="text-gray-600">
          Select the next date you'll receive payment.
        </p>
      </div>

      <div className="max-w-md mx-auto">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-full justify-start text-left font-normal text-base p-4 border-2 rounded-xl transition-all duration-200",
                dateSelected 
                  ? "border-emerald-600 bg-emerald-50 text-emerald-700 shadow-md" 
                  : "border-gray-200 hover:border-emerald-400 hover:bg-emerald-50/50 text-muted-foreground"
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
              selected={dateSelected ? formData.nextPayDate : undefined}
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
        <div className="text-center text-emerald-600 font-medium text-sm mt-4">
          ✅ You're almost there! Just a few more steps to get your loan.
        </div>
      )}
    </div>
  );
}