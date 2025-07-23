"use client";

import { useState, useEffect } from "react";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface DateBirthStepProps {
  formData: any;
  handleInputChange: (field: string, value: any) => void;
  handleNext: () => void;
  isStepValid: () => boolean;
}

export default function DateBirthStep({
  formData,
  handleInputChange,
  handleNext,
  isStepValid
}: DateBirthStepProps) {
  const [open, setOpen] = useState(false);

  // Convertir string a Date si es necesario
  const dateValue = formData.dateOfBirth 
    ? (typeof formData.dateOfBirth === 'string' ? new Date(formData.dateOfBirth) : formData.dateOfBirth)
    : undefined;

  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      handleInputChange("dateOfBirth", date);
      setOpen(false);
    }
  };

  // Manejar Enter cuando hay fecha seleccionada
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter" && isStepValid()) {
        e.preventDefault();
        handleNext();
      }
    };

    if (dateValue) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [dateValue, isStepValid, handleNext]);

  // Verificar si la fecha es válida
  const dateSelected = dateValue && dateValue instanceof Date;

  // Calcular fecha máxima (debe tener al menos 18 años)
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() - 18);

  // Calcular fecha mínima (no más de 100 años)
  const minDate = new Date();
  minDate.setFullYear(minDate.getFullYear() - 100);

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          When's your date of birth?
        </h3>
        <p className="text-gray-600">
          Lenders use your age to determine eligibility
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
                ? format(dateValue, "PPP")
                : "Select date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0 shadow-xl border-emerald-200">
            <Calendar
              mode="single"
              selected={dateSelected ? dateValue : undefined}
              onSelect={handleDateSelect}
              disabled={(date) =>
                date > maxDate || date < minDate
              }
              defaultMonth={maxDate}
              initialFocus
              fromDate={minDate}
              toDate={maxDate}
              captionLayout="dropdown-buttons"
              fromYear={minDate.getFullYear()}
              toYear={maxDate.getFullYear()}
            />
          </PopoverContent>
        </Popover>
      </div>

      {dateSelected && (
        <div className="text-center font-medium text-sm mt-4">
          {(() => {
            const age = new Date().getFullYear() - dateValue.getFullYear();
            const monthDiff = new Date().getMonth() - dateValue.getMonth();
            const dayDiff = new Date().getDate() - dateValue.getDate();
            const actualAge = monthDiff < 0 || (monthDiff === 0 && dayDiff < 0) ? age - 1 : age;
            
            if (actualAge < 18) {
              return (
                <div className="text-red-600">
                  ❌ Sorry, you must be at least 18 years old to apply for a loan.
                </div>
              );
            }
            
            return (
              <div className="text-emerald-600">
                ✅ You're almost there! Just a few more steps to get your loan.
              </div>
            );
          })()}
        </div>
      )}
    </div>
  );
}