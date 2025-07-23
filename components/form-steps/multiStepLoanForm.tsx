import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, X, Lock, Shield, CaseLower } from "lucide-react";
import { submitToAirtable } from "@/lib/api/airtable";

// Import form steps
import LoanAmountStep from "./loanAmountStep";
import LoanPurposeStep from "./loanPurposeStep";
import CreditScoreStep from "./creditStepScore";
import AddressStep from "./adressStep";
import IncomeTypeStep from "./incomeTypeStep";
import MonthlyIncomeStep from "./monthlyIncomeStep";
import DriversLicenseStep from "./driversLicenseStep";
import PaymentScheduleStep from "./paymentScheduleStep";
import EmploymentStep from "./employmentStep";
import AccountTypeStep from "./accountTypeStep";
import BankDetailsStep from "./bankDetailsStep";
import DateBirthStep from "./dateBirthStep";
import CellPhoneNumberStep from "./cellPhoneNumberStep";
import EmailAddressStep from "./emailAddressStep";
import YourNameStep from "./yourNameStep";
import SSNStep from "./ssnStep";
import HomeOwnerStep from "./homeOwner";
import NextPaydateStep from "./nextPaydateStep";
import PaycheckMethodStep from "./paycheckMethodStep";

export default function MultistepLoanForm({ onClose }: { onClose: () => void }) {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    loanAmount: '',
    loanPurpose: '',
    loanPurposeOther: '',
    creditScore: '',
    email: '',
    phone: '',
    firstName: '',
    lastName: '',
    dateOfBirth: undefined,
    zipCode: '',
    address: '',
    incomeType: '',
    monthlyIncome: '',
    ssn: '',
    homeOwner: '',
    driverLicense: '',
    licenseState: '',
    payFrequency: '',
    nextPayDate: undefined,
    employerName: '',
    paycheckMethod: '',
    accountType: '',
    routingNumber: '',
    accountNumber: ''
  });  
  
  const totalSteps = 19;

  // Función para determinar si el paso actual tiene inputs de texto
  const hasTextInputs = (): boolean => {
    const stepsWithTextInputs = [2, 4, 5, 6, 7, 9, 10, 11, 12, 13, 15, 16];
    return stepsWithTextInputs.includes(currentStep);
  };

  // Función para determinar si el paso actual tiene solo opciones de selección
  const hasOnlyOptions = (): boolean => {
    const stepsWithOnlyOptions = [1, 3, 4, 8, 14];
    return stepsWithOnlyOptions.includes(currentStep);
  };

  const isStepValid = useCallback(() => {
    let result = false;
  
    switch (currentStep) {
      case 1: // LoanAmountStep
        result = formData.loanAmount !== '';
        break;
        
      case 2: // EmailAddressStep
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        result = formData.email !== '' && emailRegex.test(formData.email);
        break;
        
      case 3: // CreditScoreStep
        result = formData.creditScore !== '';
        break;
        
      case 4: // LoanPurposeStep
        result = formData.loanPurpose !== '';
        break;
        
      case 5: // YourNameStep
        // Validar que solo contengan letras y espacios, mínimo 2 caracteres
        const nameRegex = /^[a-zA-Z\s'-]{2,}$/;
        result = formData.firstName !== '' && 
                 formData.lastName !== '' &&
                 nameRegex.test(formData.firstName) &&
                 nameRegex.test(formData.lastName);
        break;
        
      case 6: // CellPhoneNumberStep
        // Validar que tenga 10 u 11 dígitos
        const phoneDigits = formData.phone.replace(/\D/g, '');
        result = phoneDigits.length === 10 || phoneDigits.length === 11;
        break;
        
      case 7: // AddressStep
        // Validar ZIP code de 5 dígitos
        const zipRegex = /^\d{5}$/;
        result = formData.zipCode !== '' && 
                 formData.address !== '' &&
                 zipRegex.test(formData.zipCode) &&
                 formData.address.length >= 5; // Mínimo 5 caracteres para dirección
        break;
        
      case 8: // IncomeTypeStep
        result = formData.incomeType !== '';
        break;
        
      case 9: { // DateBirthStep
        const dob = formData.dateOfBirth;
        if (!dob) {
          result = false;
          break;
        }
      
        const date = typeof dob === 'string' ? new Date(dob) : dob;
        const now = new Date();
        const age = now.getFullYear() - date.getFullYear();
        const monthDiff = now.getMonth() - date.getMonth();
        const dayDiff = now.getDate() - date.getDate();
        const actualAge = monthDiff < 0 || (monthDiff === 0 && dayDiff < 0) ? age - 1 : age;
      
        result = actualAge >= 18 && actualAge <= 100; // Entre 18 y 100 años
        break;
      }
      
      case 10: // MonthlyIncomeStep
        result = formData.monthlyIncome !== '';
        break;
        
      case 11: // SSNStep
        const ssnDigits = formData.ssn.replace(/\D/g, '');
        // Validar 9 dígitos y que no sea todo ceros o números repetidos
        const invalidSSN = /^000|^666|^9\d{2}|^\d{3}00|^\d{5}0000|^(\d)\1{8}$/;
        result = ssnDigits.length === 9 && !invalidSSN.test(ssnDigits);
        break;
        
      case 12: // HomeOwnerStep
        result = formData.homeOwner !== '';
        break;
        
      case 13: // DriversLicenseStep
        // Validar que tenga al menos 5 caracteres y estado válido
        result = formData.driverLicense !== '' && 
                 formData.licenseState !== '' &&
                 formData.driverLicense.length >= 5;
        break;
        
      case 14: // PaymentScheduleStep
        result = formData.payFrequency !== '';
        break;
        
      case 15: // NextPaydateStep
        const payDate = formData.nextPayDate;
        if (!payDate) {
          result = false;
          break;
        }
        
        const dateObj = typeof payDate === 'string' ? new Date(payDate) : payDate;
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        // Debe ser fecha futura, no más de 60 días en el futuro
        const maxDate = new Date();
        maxDate.setDate(maxDate.getDate() + 60);
        
        result = dateObj >= today && dateObj <= maxDate;
        break;
        
      case 16: // EmploymentStep
        // Mínimo 2 caracteres
        result = formData.employerName !== '' && 
                 formData.employerName.length >= 2;
        break;
        
      case 17: // PaycheckMethodStep
        result = formData.paycheckMethod !== '';
        break;
        
      case 18: // AccountTypeStep
        result = formData.accountType !== '';
        break;
        
      case 19: // BankDetailsStep
        // Routing number: 9 dígitos
        // Account number: entre 4 y 17 dígitos
        const routingRegex = /^\d{9}$/;
        const accountRegex = /^\d{4,17}$/;
        
        result = formData.routingNumber !== '' && 
                 formData.accountNumber !== '' &&
                 routingRegex.test(formData.routingNumber) &&
                 accountRegex.test(formData.accountNumber);
        break;
        
      default:
        result = true;
    }
  
    return result;
  }, [currentStep, formData]);

  const handlePartialSubmit = useCallback(async (status: string = 'Incomplete') => {
    try {
      const partialData = {
        ...formData,
        status: status,
        completedSteps: currentStep,
        abandonedAt: new Date().toISOString()
      };
      
      await submitToAirtable(partialData);
      console.log("Partial data sent to Airtable");
    } catch (error) {
      console.error("Error sending partial data:", error);
    }
  }, [formData, currentStep]);

  const handleSubmit = useCallback(async () => {
    try {
      const completeData = {
        ...formData,
        status: 'Complete',
        completedSteps: totalSteps,
        submittedAt: new Date().toISOString()
      };
      
      await submitToAirtable(completeData);
      console.log("Complete data sent to Airtable");
      
      // Guardar en localStorage con flag de completado
      localStorage.setItem('loanApplicationData', JSON.stringify({
        firstName: formData.firstName,
        loanAmount: formData.loanAmount,
        timestamp: Date.now(),
        isComplete: true
      }));
      
      // Redirigir a la página de procesamiento
      router.push('/loan-processing');
      
      // Cerrar el formulario después de un breve delay
      setTimeout(() => {
        onClose();
      }, 100);
    } catch (error) {
      alert("There was an error submitting your application.");
    }
  }, [formData, router, onClose]);

  // Manejador global de tecla Enter
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // Solo manejar Enter si el paso tiene inputs de texto
      if (event.key === 'Enter' && hasTextInputs()) {
        event.preventDefault();
        
        // Si estamos en el último paso, hacer submit
        if (currentStep === totalSteps && isStepValid()) {
          console.log('Enter pressed on last step - submitting form');
          handleSubmit();
        } 
        // Si no, avanzar al siguiente paso
        else if (currentStep < totalSteps && isStepValid()) {
          console.log('Enter pressed - advancing to next step');
          setCurrentStep(currentStep + 1);
        }
      }
    };

    window.addEventListener('keypress', handleKeyPress);
    return () => {
      window.removeEventListener('keypress', handleKeyPress);
    };
  }, [currentStep, isStepValid, handleSubmit]);

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (currentStep > 1 && currentStep < totalSteps) {
        // Enviar datos parciales antes de cerrar
        handlePartialSubmit('Abandoned');
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [currentStep, handlePartialSubmit, totalSteps]);

  const handleNext = () => {
    console.log('handleNext called');
    if (currentStep < totalSteps && isStepValid()) {
      console.log('Advancing to next step...');
      setCurrentStep(currentStep + 1);
    } else if (currentStep === totalSteps && isStepValid()) {
      console.log('Last step - submitting form...');
      handleSubmit();
    }
  };

  const handleOptionSelect = (field: string, value: string) => {
    console.log('handleOptionSelect called with:', { field, value });
    setFormData({ ...formData, [field]: value });
    
    // Advance immediately for option selections
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData({ ...formData, [field]: value });
  };

  // Modificar onClose para envío parcial
  const handleClose = () => {
    if (currentStep > 1 && currentStep < totalSteps) {
      // Usuario cerró el formulario sin completar
      handlePartialSubmit('Abandoned');
    }
    onClose();
  };

  const renderCurrentStep = () => {
    const stepProps = {
      formData,
      handleInputChange,
      handleNext,
      isStepValid,
      handleOptionSelect
    };

    switch (currentStep) {
      case 1: return <LoanAmountStep {...stepProps} />;
      case 2: return <EmailAddressStep {...stepProps} />;
      case 3: return <CreditScoreStep {...stepProps} />;
      case 4: return <LoanPurposeStep {...stepProps} />;
      case 5: return <YourNameStep {...stepProps} />;
      case 6: return <CellPhoneNumberStep {...stepProps} />;
      case 7: return <AddressStep {...stepProps} />;
      case 8: return <IncomeTypeStep {...stepProps} />;
      case 9: return <DateBirthStep {...stepProps} />;
      case 10: return <MonthlyIncomeStep {...stepProps} />;
      case 11: return <SSNStep {...stepProps} />;
      case 12: return <HomeOwnerStep {...stepProps} />;
      case 13: return <DriversLicenseStep {...stepProps} />;
      case 14: return <PaymentScheduleStep {...stepProps} />;
      case 15: return <NextPaydateStep {...stepProps} />
      case 16: return <EmploymentStep {...stepProps} />;
      case 17: return <PaycheckMethodStep {...stepProps} />;
      case 18: return <AccountTypeStep {...stepProps} />;
      case 19: return <BankDetailsStep {...stepProps} />;
      default: return null;
    }
  };

  return (
    <div className="w-full h-full flex flex-col">
      {/* Header fijo */}
      <div className="px-4 pt-4 pb-2 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-gray-800">Loan Application</h2>
            <p className="text-xs text-gray-500">Quick and secure process</p>
          </div>

        </div>
      </div>

      {/* Progress fijo */}
      <div className="px-4 py-2 border-b border-gray-100">
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs font-semibold text-gray-600">
            Step {currentStep} of {totalSteps}
          </span>
          <span className="text-xs text-emerald-600 font-semibold">
            {Math.round((currentStep / totalSteps) * 100)}% Complete
          </span>
        </div>
        <Progress value={(currentStep / totalSteps) * 100} className="h-1.5 bg-gray-200" />
      </div>

      {/* Content con scroll */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        <div className="min-h-[300px]">
          {renderCurrentStep()}
        </div>
      </div>

      {/* Footer fijo */}
      <div className="px-4 pb-4 pt-2 border-t border-gray-100 bg-white">
        {/* Navigation con indicación de Enter condicional */}
        {hasTextInputs() && (
          <div className="text-center text-xs text-gray-600 mb-2">
            {currentStep < totalSteps ? (
              <>Press <kbd className="px-1.5 py-0.5 text-xs bg-gray-100 border border-gray-300 rounded font-semibold">Enter</kbd> to continue</>
            ) : (
              <>Press <kbd className="px-1.5 py-0.5 text-xs bg-gray-100 border border-gray-300 rounded font-semibold">Enter</kbd> to get your rates</>
            )}
          </div>
        )}

        {/* Mensaje para pasos con opciones */}
        {hasOnlyOptions() && (
          <div className="text-center text-xs text-gray-600 mb-2">
            Select an option to continue
          </div>
        )}

        {/* Trust badges */}
        <div className="flex items-center justify-center gap-3 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <Lock className="h-2.5 w-2.5" />
            <span>SSL Secured</span>
          </div>
          <div className="flex items-center gap-1">
            <Shield className="h-2.5 w-2.5" />
            <span>256-bit Encryption</span>
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle className="h-2.5 w-2.5" />
            <span>No Credit Impact</span>
          </div>
        </div>
      </div>
    </div>
  );
}