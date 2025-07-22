"use client";

import { useEffect, useRef } from "react";
import { Shield } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface EmploymentStepProps {
  formData: any;
  handleInputChange: (field: string, value: any) => void;
  handleNext: () => void;
  isStepValid: () => boolean;
}

export default function EmploymentStep({
  formData,
  handleInputChange,
  handleNext,
  isStepValid,
}: EmploymentStepProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const hasAutoAdvanced = useRef(false);

  // Auto-focus en el input cuando el componente se monta
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Escuchar Enter para avanzar
  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.key === "Enter" && isStepValid()) {
        e.preventDefault();
        handleNext();
      }
    };

    window.addEventListener("keydown", listener);
    return () => window.removeEventListener("keydown", listener);
  }, [isStepValid, handleNext]);

  // Auto-avanzar cuando el campo tiene al menos 3 caracteres
  useEffect(() => {
    if (formData.employerName && formData.employerName.length >= 3 && !hasAutoAdvanced.current && isStepValid()) {
      hasAutoAdvanced.current = true;
      // Pequeño delay para mejor UX
      const timer = setTimeout(() => {
        handleNext();
      }, 500);
      return () => clearTimeout(timer);
    }
    // Reset la bandera si el usuario borra el contenido
    if (!formData.employerName || formData.employerName.length < 3) {
      hasAutoAdvanced.current = false;
    }
  }, [formData.employerName, handleNext, isStepValid]);

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Employment Information</h3>
        <p className="text-gray-600">We won't contact your employer</p>
      </div>
      <div className="max-w-xl mx-auto">
        <div>
          <Label htmlFor="employerName" className="text-base font-medium mb-2 block">
            Employer Name / Income Source
          </Label>
          <Input
            ref={inputRef}
            id="employerName"
            type="text"
            placeholder="Company Name"
            value={formData.employerName || ""}
            onChange={(e) => handleInputChange("employerName", e.target.value)}
            className="text-base p-4 border-2 focus:border-emerald-600 transition-colors"
            autoComplete="off"
          />
          <div className="mt-3 space-y-2">
            <p className="text-sm text-emerald-600 text-center flex items-center justify-center gap-2">
              We will NOT contact your employer
            </p>
            {formData.employerName && formData.employerName.length > 0 && (
              <p className="text-xs text-gray-500 text-center">
                Press Enter to continue
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}