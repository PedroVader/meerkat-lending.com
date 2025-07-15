import React from 'react';
import { User, Calendar as CalendarIcon } from "lucide-react";

interface PersonalInfoStepProps {
  formData: any;
  handleInputChange: (field: string, value: any) => void;
}

export default function PersonalInfoStep({ formData, handleInputChange }: PersonalInfoStepProps) {
  // Estado local para controlar el calendario
  const [showCalendar, setShowCalendar] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState<string | null>(formData.dateOfBirth || null);

  // Formatear fecha
  const formatDate = (date: string | Date | null) => {
    if (!date) return "Select your birth date";
    return new Date(date).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  // Manejar selección de fecha
  const handleDateSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSelectedDate(value);
    handleInputChange('dateOfBirth', value);
  };

  return (
    <div className="space-y-6 relative">
      <style jsx>{`
        /* Asegurar que los inputs sean clickeables */
        input {
          position: relative;
          z-index: 1;
        }
        
        /* Estilo para el calendario personalizado */
        .calendar-container {
          position: absolute;
          z-index: 1000;
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 0.5rem;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          padding: 1rem;
          margin-top: 0.5rem;
        }
        
        /* Prevenir que otros elementos se superpongan */
        .form-input {
          position: relative;
          z-index: 10;
        }
      `}</style>

      <div className="text-center">
        <User className="h-12 w-12 text-emerald-600 mx-auto mb-3" />
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Personal Information</h3>
        <p className="text-gray-600">Tell us about yourself</p>
      </div>
      
      <div className="max-w-2xl mx-auto space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="form-input">
            <label htmlFor="firstName" className="text-base font-medium mb-2 block">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              placeholder="John"
              value={formData.firstName || ''}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-base"
              autoComplete="off"
            />
          </div>
          
          <div className="form-input">
            <label htmlFor="lastName" className="text-base font-medium mb-2 block">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              placeholder="Doe"
              value={formData.lastName || ''}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-base"
              autoComplete="off"
            />
          </div>
        </div>
        
        <div className="form-input relative">
          <label className="text-base font-medium mb-2 block">
            Date of Birth
          </label>
          
          {/* Opción 1: Input de fecha nativo HTML5 */}
          <div className="relative">
            <input
              type="date"
              value={formData.dateOfBirth || ''}
              onChange={handleDateSelect}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-base"
              max={new Date().toISOString().split('T')[0]}
            />
            <CalendarIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
          </div>
          
          {/* Alternativa: Si prefieres un botón que muestre/oculte un selector personalizado */}
          {/*
          <button
            type="button"
            onClick={() => setShowCalendar(!showCalendar)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-base flex items-center justify-between hover:bg-gray-50"
          >
            <span className={selectedDate ? "text-gray-900" : "text-gray-500"}>
              {formatDate(selectedDate)}
            </span>
            <CalendarIcon className="h-5 w-5 text-gray-400" />
          </button>
          
          {showCalendar && (
            <div className="calendar-container">
              <input
                type="date"
                value={formData.dateOfBirth || ''}
                onChange={(e) => {
                  handleDateSelect(e);
                  setShowCalendar(false);
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
                autoFocus
              />
            </div>
          )}
          */}
        </div>
      </div>
    </div>
  );
}