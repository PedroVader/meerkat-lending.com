import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, X, Lock, Shield } from "lucide-react";
import { submitToAirtable } from "@/lib/api/airtable";

// Import form steps
import LoanAmountStep from "./loanAmountStep";
import LoanPurposeStep from "./loanPurposeStep";
import CreditScoreStep from "./creditStepScore";
import ContactInfoStep from "./contactInfoStep";
import PersonalInfoStep from "./personalInfoStep";
import AddressStep from "./adressStep";
import IncomeTypeStep from "./incomeTypeStep";
import MonthlyIncomeStep from "./monthlyIncomeStep";
import IdentityVerificationStep from "./identityVerificationStep";
import DriversLicenseStep from "./driversLicenseStep";
import PaymentScheduleStep from "./paymentScheduleStep";
import EmploymentStep from "./employmentStep";
import PaymentMethodStep from "./paymentMethodStep";
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
    paymentMethod: '',
    paycheckMethod: '', // 👈 AÑADIR AQUÍ
    accountType: '',
    routingNumber: '',
    accountNumber: ''
  });  
  
  const totalSteps = 18;

  // Función para determinar si el paso actual tiene inputs de texto
  const hasTextInputs = (): boolean => {
    const stepsWithTextInputs = [2, 4, 5, 6, 7, 9, 10, 11, 12, 13, 15];
    return stepsWithTextInputs.includes(currentStep);
  };

  // Función para determinar si el paso actual tiene solo opciones de selección
  const hasOnlyOptions = (): boolean => {
    const stepsWithOnlyOptions = [1, 3, 4, 8, 14];
    return stepsWithOnlyOptions.includes(currentStep);
  };

  // Manejador global de tecla Enter
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // Solo manejar Enter si el paso tiene inputs de texto
      if (event.key === 'Enter' && hasTextInputs()) {
        event.preventDefault(); // Prevenir submit del formulario
        
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

    // Agregar el event listener
    window.addEventListener('keypress', handleKeyPress);

    // Cleanup
    return () => {
      window.removeEventListener('keypress', handleKeyPress);
    };
  }, [currentStep, formData]); // Dependencias importantes

  const isStepValid = () => {
    let result = false;
  
    switch (currentStep) {
      case 1: // LoanAmountStep
        result = formData.loanAmount !== '';
        break;
      case 2: // EmailAddressStep
        result = formData.email !== '';
        break;
      case 3: // CreditScoreStep
        result = formData.creditScore !== '';
        break;
      case 4: // LoanPurposeStep
        result =
          formData.loanPurpose !== '' &&
          (formData.loanPurpose !== 'other' || formData.loanPurposeOther !== '');
        break;
      case 5: // YourNameStep
        result = formData.firstName !== '' && formData.lastName !== '';
        break;
      case 6: // CellPhoneNumberStep
        result = formData.phone !== '';
        break;
      case 7: // AddressStep
        result = formData.zipCode !== '' && formData.address !== '';
        break;
      case 8: // IncomeTypeStep
        result = formData.incomeType !== '';
        break;
      case 9: // DateBirthStep
        result = !!formData.dateOfBirth;
        break;
      case 10: // MonthlyIncomeStep
        const raw = formData.monthlyIncome;
        const numeric = parseFloat(raw.replace(/[^0-9.]/g, ""));
        result = !isNaN(numeric) && numeric > 0;
        break;
      case 11: // SSNStep
        const ssnDigits = formData.ssn.replace(/\D/g, '');
        result = ssnDigits.length === 9;
        break;
      case 12: // HomeOwnerStep
        result = formData.homeOwner !== '';
        break;
      case 13: // DriversLicenseStep
        result = formData.driverLicense !== '' && formData.licenseState !== '';
        break;
      case 14: // PaymentScheduleStep
        const date = formData.nextPayDate;
        result = !!(date && !isNaN(new Date(date).getTime()));
        break;
      case 15: // EmploymentStep
        result = formData.employerName !== '';
        break;
      case 16: // PaycheckMethodStep
        result = formData.paycheckMethod !== '';
        break;
      case 17: // BankDetailsStep
        result = formData.routingNumber !== '' && formData.accountNumber !== '';
        break;
      default:
        result = true;
    }
  
    return result;
  };  

  const handlePartialSubmit = async (status: string = 'Incomplete') => {
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
  };

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

// Modificar handleSubmit para incluir status
const handleSubmit = async () => {
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
      isComplete: true // Flag importante
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
};

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
}, [currentStep, formData]);

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
      case 15: return <EmploymentStep {...stepProps} />;
      case 16: return <PaycheckMethodStep {...stepProps} />;
      case 17: return <AccountTypeStep {...stepProps} />;
      case 18: return <BankDetailsStep {...stepProps} />;
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
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
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