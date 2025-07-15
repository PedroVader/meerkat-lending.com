import { Clock, CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils"; // Adjust the import path as necessary

interface PaymentScheduleStepProps {
  formData: any;
  handleInputChange: (field: string, value: any) => void;
}

export default function PaymentScheduleStep({ formData, handleInputChange }: PaymentScheduleStepProps) {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <Clock className="h-12 w-12 text-emerald-600 mx-auto mb-3" />
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Payment Schedule</h3>
        <p className="text-gray-600">When do you receive your income?</p>
      </div>
      <div className="max-w-2xl mx-auto space-y-6">
        <div>
          <Label className="text-base font-medium mb-3 block">How often are you paid?</Label>
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: 'weekly', label: 'Weekly' },
              { value: 'biweekly', label: 'Every 2 weeks' },
              { value: 'twice-monthly', label: 'Twice a month' },
              { value: 'monthly', label: 'Monthly' }
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => handleInputChange('payFrequency', option.value)}
                className={cn(
                  "p-4 border-2 rounded-xl font-semibold text-base transition-all duration-200 hover:scale-105 hover:shadow-md",
                  formData.payFrequency === option.value
                    ? "border-emerald-600 bg-emerald-50 text-emerald-700 shadow-md"
                    : "border-gray-200 hover:border-emerald-400 hover:bg-emerald-50/50"
                )}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
        <div>
          <Label className="text-base font-medium mb-2 block">When is your next payday?</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal text-base p-4",
                  !formData.nextPayDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {formData.nextPayDate ? format(formData.nextPayDate, "PPP") : "Select date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={formData.nextPayDate}
                onSelect={(date) => handleInputChange('nextPayDate', date)}
                disabled={(date) => 
                  date < new Date() || 
                  date.getDay() === 0 || 
                  date.getDay() === 6
                }
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
}