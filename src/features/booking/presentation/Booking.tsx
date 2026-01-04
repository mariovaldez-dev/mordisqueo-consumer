import React, { useState } from 'react';
import { Calendar, Package as PackageIcon, User, Check } from 'lucide-react';
import { UserInfo, EventDetails, Package, EventType, Step } from './types';
import { EventDetailsStep } from './components/EventDetailsStep';
import { PackageSelectionStep } from './components/PackageSelectionStep';
import { ContactInfoStep } from './components/ContactInfoStep';
import { ConfirmationStep } from './components/ConfirmationStep';
import { StepperSidebar } from './components/StepperSidebar';
import { BookingProgress } from './components/BookingProgress';

const Booking: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedPackages, setSelectedPackages] = useState<Package[]>([]);
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: 'Juan',
    lastName: 'Pérez',
    phone: '5512345678',
    email: 'juan.perez@ejemplo.com',
    company: 'Empresa Demo S.A.'
  });
  const [eventDetails, setEventDetails] = useState<EventDetails>({
    eventType: 'Cumpleaños',
    date: new Date(Date.now() + 86400000 * 7).toISOString().split('T')[0], // Una semana después de hoy
    time: '18:00',
    location: 'Av. Siempreviva 123, Ciudad de México',
    guests: 50,
    duration: 5,
    specialRequests: 'Requerimos opciones vegetarianas.'
  });

  const packages: Package[] = [
    {
      id: 'basic',
      name: 'Paquete Básico',
      price: 15000,
      description: 'Perfecto para eventos íntimos',
      features: ['Decoración básica', 'Mesero por 4 horas', 'Música ambiente', 'Limpieza incluida'],
      maxGuests: 50,
      image: '🎉'
    },
    {
      id: 'premium',
      name: 'Paquete Premium',
      price: 28000,
      description: 'La opción ideal para eventos especiales',
      features: ['Decoración temática', 'Chef y meseros', 'Sistema de sonido pro', 'Coordinador de eventos'],
      maxGuests: 100,
      image: '👑'
    },
    {
      id: 'luxury',
      name: 'Paquete Luxury',
      price: 50000,
      description: 'La experiencia más exclusiva',
      features: ['Todo incluido premium', 'Coordinador personal', 'Servicio VIP', 'Garantía de excelencia'],
      maxGuests: 200,
      image: '💎'
    },
    {
      id: 'snacks',
      name: 'Mesa de Snacks',
      price: 5000,
      description: 'Barra de snacks personalizada',
      features: ['Variedad de botanas', 'Dulces personalizados', 'Refrescos incluidos'],
      maxGuests: 100,
      image: '🍿'
    },
    {
      id: 'drinks',
      name: 'Barra de Bebidas',
      price: 8000,
      description: 'Servicio completo de bebidas',
      features: ['Bartender profesional', 'Cocteles premium', 'Bebidas sin alcohol'],
      maxGuests: 100,
      image: '🍹'
    }
  ];

  const eventTypes: EventType[] = [
    'Cumpleaños', 'Boda', 'Aniversario', 'Baby Shower', 'Graduación',
    'Corporativo', 'Quinceañera', 'Bautizo', 'Otro'
  ];

  const steps: Step[] = [
    { id: 1, title: 'Detalles del Evento', icon: Calendar },
    { id: 2, title: 'Seleccionar Paquetes', icon: PackageIcon },
    { id: 3, title: 'Información de Contacto', icon: User },
    { id: 4, title: 'Confirmar Reserva', icon: Check }
  ];

  const calculateTotal = (): number => {
    return selectedPackages.reduce((sum, pkg) => sum + pkg.price, 0);
  };

  const togglePackage = (pkg: Package) => {
    setSelectedPackages(prev => {
      const isSelected = prev.some(p => p.id === pkg.id);
      if (isSelected) {
        return prev.filter(p => p.id !== pkg.id);
      } else {
        return [...prev, pkg];
      }
    });
  };

  const canContinue = (): boolean => {
    if (currentStep === 1) {
      return !!(eventDetails.eventType && eventDetails.date && eventDetails.time && eventDetails.location);
    }
    if (currentStep === 2) {
      return selectedPackages.length > 0;
    }
    if (currentStep === 3) {
      return !!(userInfo.name && userInfo.lastName && userInfo.phone && userInfo.email);
    }
    return true;
  };

  const renderCurrentStep = (): JSX.Element => {
    switch (currentStep) {
      case 1:
        return (
          <EventDetailsStep
            eventDetails={eventDetails}
            setEventDetails={setEventDetails}
            eventTypes={eventTypes}
            canContinue={canContinue()}
          />
        );
      case 2:
        return (
          <PackageSelectionStep
            packages={packages}
            selectedPackages={selectedPackages}
            eventDetails={eventDetails}
            togglePackage={togglePackage}
            canContinue={canContinue()}
            calculateTotal={calculateTotal}
          />
        );
      case 3:
        return (
          <ContactInfoStep
            userInfo={userInfo}
            setUserInfo={setUserInfo}
            canContinue={canContinue()}
          />
        );
      case 4:
        return (
          <ConfirmationStep
            eventDetails={eventDetails}
            userInfo={userInfo}
            selectedPackages={selectedPackages}
            calculateTotal={calculateTotal}
            onConfirm={() => alert('¡Reservación confirmada! Te contactaremos pronto.')}
          />
        );
      default:
        return <div>Paso no válido</div>;
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#F5F5F5] dark:bg-zinc-900 flex items-center justify-center p-4 transition-colors duration-300">
      <div className="w-full max-w-5xl bg-white dark:bg-zinc-800 rounded-2xl shadow-2xl overflow-hidden transition-colors duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Left Sidebar */}
          <StepperSidebar steps={steps} currentStep={currentStep} />

          {/* Right Content Area */}
          <div className="col-span-1 lg:col-span-9 w-full bg-gradient-to-br from-white to-pink-50 dark:from-zinc-800 dark:to-zinc-900 transition-colors duration-300">
            {/* Header with Progress */}
            <BookingProgress
              currentStep={currentStep}
              totalSteps={steps.length}
              title={steps[currentStep - 1].title}
            />
            {/* Step Content */}
            <div className="mb-8 p-8">
              {renderCurrentStep()}
            </div>



            {/* Navigation Buttons */}
            <div className="flex items-center justify-between pt-6 border-t border-purple-200 p-8">
              <button
                onClick={() => currentStep > 1 && setCurrentStep(currentStep - 1)}
                disabled={currentStep === 1}
                className={`px-5 py-2.5 rounded-lg font-medium text-sm transition-all ${currentStep === 1
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-purple-700 hover:bg-purple-100 border border-purple-300'
                  }`}
              >
                Atrás
              </button>

              {currentStep < 4 && (
                <button
                  onClick={() => canContinue() && setCurrentStep(currentStep + 1)}
                  disabled={!canContinue()}
                  className={`px-6 py-2.5 rounded-lg font-semibold text-sm transition-all ${canContinue()
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 shadow-lg shadow-purple-300'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                >
                  Siguiente Paso
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;