import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft, ArrowRight, CheckCircle, X, Lock, Shield } from "lucide-react";

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

export default function MultistepLoanForm({ onClose }: { onClose: () => void }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1
    loanAmount: '',
    // Step 2
    loanPurpose: '',
    loanPurposeOther: '',
    // Step 3
    creditScore: '',
    // Step 4
    email: '',
    phone: '',
    // Step 5
    firstName: '',
    lastName: '',
    dateOfBirth: undefined,
    // Step 6
    zipCode: '',
    address: '',
    // Step 7
    incomeType: '',
    // Step 8
    monthlyIncome: '',
    // Step 9
    ssn: '',
    homeOwner: '',
    // Step 10
    driverLicense: '',
    licenseState: '',
    // Step 11
    payFrequency: '',
    nextPayDate: undefined,
    // Step 12
    employerName: '',
    // Step 13
    paymentMethod: '',
    // Step 14
    accountType: '',
    // Step 15
    routingNumber: '',
    accountNumber: ''
  });

  const totalSteps = 15;

  // Manejador global de tecla Enter
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        event.preventDefault(); // Prevenir submit del formulario
        
        // Si estamos en el último paso, hacer submit
        if (currentStep === totalSteps && isStepValid()) {
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

  const isStepValid = (): boolean => {
    console.log(`Validating step ${currentStep}`, formData);
    
    let result = false;
    
    switch (currentStep) {
      case 1:
        result = formData.loanAmount !== '';
        break;
      case 2:
        result = formData.loanPurpose !== '' && 
               (formData.loanPurpose !== 'other' || formData.loanPurposeOther !== '');
        break;
      case 3:
        result = formData.creditScore !== '';
        break;
      case 4:
        // Simplificamos la validación temporalmente
        result = formData.email !== '' && formData.phone !== '';
        break;
      case 5:
        result = formData.firstName !== '' && formData.lastName !== '' && formData.dateOfBirth !== undefined;
        break;
      case 6:
        result = formData.zipCode !== '' && formData.address !== '';
        break;
      case 7:
        result = formData.incomeType !== '';
        break;
      case 8:
        result = formData.monthlyIncome !== '';
        break;
      case 9:
        result = formData.ssn !== '' && formData.homeOwner !== '';
        break;
      case 10:
        result = formData.driverLicense !== '' && formData.licenseState !== '';
        break;
      case 11:
        result = formData.payFrequency !== '' && formData.nextPayDate !== undefined;
        break;
      case 12:
        result = formData.employerName !== '';
        break;
      case 13:
        result = formData.paymentMethod !== '';
        break;
      case 14:
        result = formData.accountType !== '';
        break;
      case 15:
        result = formData.routingNumber !== '' && formData.accountNumber !== '';
        break;
      default:
        result = true;
    }
    
    console.log(`Step ${currentStep} validation result:`, result);
    return result;
  };

  const handleNext = () => {
    console.log('handleNext called');
    if (currentStep < totalSteps && isStepValid()) {
      console.log('Advancing to next step...');
      setCurrentStep(currentStep + 1);
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

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
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
      case 1:
        return <LoanAmountStep {...stepProps} />;
      case 2:
        return <LoanPurposeStep {...stepProps} />;
      case 3:
        return <CreditScoreStep {...stepProps} />;
      case 4:
        return <ContactInfoStep {...stepProps} />;
      case 5:
        return <PersonalInfoStep {...stepProps} />;
      case 6:
        return <AddressStep {...stepProps} />;
      case 7:
        return <IncomeTypeStep {...stepProps} />;
      case 8:
        return <MonthlyIncomeStep {...stepProps} />;
      case 9:
        return <IdentityVerificationStep {...stepProps} />;
      case 10:
        return <DriversLicenseStep {...stepProps} />;
      case 11:
        return <PaymentScheduleStep {...stepProps} />;
      case 12:
        return <EmploymentStep {...stepProps} />;
      case 13:
        return <PaymentMethodStep {...stepProps} />;
      case 14:
        return <AccountTypeStep {...stepProps} />;
      case 15:
        return <BankDetailsStep {...stepProps} />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg w-full h-full flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div>
            <h2 className="text-lg font-bold text-gray-800">Loan Application</h2>
            <p className="text-xs text-gray-500">Quick and secure process</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-lg"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      {/* Progress */}
      <div className="p-4 border-b border-gray-100">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-semibold text-gray-600">Step {currentStep} of {totalSteps}</span>
          <span className="text-xs text-emerald-600 font-semibold">{Math.round((currentStep / totalSteps) * 100)}% Complete</span>
        </div>
        <Progress value={(currentStep / totalSteps) * 100} className="h-2 bg-gray-200" />
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center p-4 overflow-y-auto">
        {renderCurrentStep()}
      </div>

      {/* Navigation con indicación de Enter */}
      <div className="p-4 border-t border-gray-100">
        {/* Indicación visual de que se puede usar Enter */}
        <div className="text-center text-sm text-gray-600">
          {currentStep < totalSteps ? (
            <>Press <kbd className="px-2 py-1 text-xs bg-gray-100 border border-gray-300 rounded font-semibold">Enter</kbd> to continue</>
          ) : (
            <>Press <kbd className="px-2 py-1 text-xs bg-gray-100 border border-gray-300 rounded font-semibold">Enter</kbd> to get your rates</>
          )}
        </div>
      </div>

      {/* Trust badges */}
      <div className="px-4 pb-4 flex items-center justify-center gap-4 text-xs text-gray-500">
        <div className="flex items-center gap-1">
          <Lock className="h-3 w-3" />
          <span>SSL Secured</span>
        </div>
        <div className="flex items-center gap-1">
          <Shield className="h-3 w-3" />
          <span>256-bit Encryption</span>
        </div>
        <div className="flex items-center gap-1">
          <CheckCircle className="h-3 w-3" />
          <span>No Credit Impact</span>
        </div>
      </div>
    </div>
  );
}