import React, { useState } from 'react';

interface SnackOption {
  id: string;
  name: string;
  desc: string;
  thumb: string;
}

interface Selections {
  papitas: Set<string>;
  gomitas: Set<string>;
  extras: Set<string>;
}

type CategoryKey = keyof Selections;

const SnackStepper = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selections, setSelections] = useState<Selections>({
    papitas: new Set(),
    gomitas: new Set(),
    extras: new Set()
  });

  const papitasOptions: SnackOption[] = [
    { id: 'doritos', name: 'Doritos', desc: 'Zesty & crunchy', thumb: 'D' },
    { id: 'sabritas', name: 'Sabritas Original', desc: 'Clásicas', thumb: 'S' },
    { id: 'cheetos', name: 'Cheetos', desc: 'Sabor a queso', thumb: 'C' },
    { id: 'ruffles', name: 'Ruffles', desc: 'Onduladas', thumb: 'R' },
    { id: 'takis', name: 'Takis', desc: 'Picositos', thumb: 'T' },
  ];

  const gomitasOptions: SnackOption[] = [
    { id: 'gusanos', name: 'Gusanos enchilados', desc: 'Picante dulce', thumb: 'G' },
    { id: 'ositos', name: 'Ositos', desc: 'Suaves', thumb: 'O' },
    { id: 'aros', name: 'Aros de durazno', desc: 'Clásicos', thumb: 'A' },
    { id: 'sandias', name: 'Sandías', desc: 'Dulce & fresco', thumb: 'S' },
    { id: 'manguitos', name: 'Manguitos', desc: 'Sabor mango', thumb: 'M' },
  ];

  const extrasOptions: SnackOption[] = [
    { id: 'pepino', name: 'Pepino', desc: 'Fresco', thumb: '🥒' },
    { id: 'cacahuates', name: 'Cacahuates', desc: 'Salados', thumb: '🥜' },
    { id: 'salchicha', name: 'Salchicha', desc: 'Cortada', thumb: '🌭' },
    { id: 'chamoy', name: 'Chamoy', desc: 'Sabor intenso', thumb: '🍯' },
    { id: 'tajin', name: 'Tajín', desc: 'Polvo + sazón', thumb: '🌶' },
  ];

  const steps = [
    { id: 1, title: 'Papitas', subtitle: 'Elige hasta 3', icon: '🥔' },
    { id: 2, title: 'Gomitas', subtitle: 'Elige hasta 3', icon: '🍬' },
    { id: 3, title: 'Extras', subtitle: 'Opcionales', icon: '✨' },
    { id: 4, title: 'Resumen', subtitle: 'Confirma tu pedido', icon: '📋' },
  ];

  const toggleSelection = (category: CategoryKey, itemId: string, maxLimit: number) => {
    setSelections(prev => {
      // Create new Sets to ensure immutability
      const newSelections = {
        papitas: new Set(prev.papitas),
        gomitas: new Set(prev.gomitas),
        extras: new Set(prev.extras)
      };

      if (newSelections[category].has(itemId)) {
        newSelections[category].delete(itemId);
      } else {
        if (newSelections[category].size >= maxLimit) {
          return prev; // No exceder el límite
        }
        newSelections[category].add(itemId);
      }
      return newSelections;
    });
  };

  const canContinue = (step: number) => {
    switch (step) {
      case 1: return selections.papitas.size > 0;
      case 2: return selections.gomitas.size > 0;
      case 3: return true; // Extras son opcionales
      default: return true;
    }
  };

  const resetSelections = () => {
    setSelections({
      papitas: new Set(),
      gomitas: new Set(),
      extras: new Set()
    });
    setCurrentStep(1);
  };

  interface OptionCardProps {
    option: SnackOption;
    category: CategoryKey;
    isSelected: boolean;
    maxReached: boolean;
    maxLimit: number;
  }

  const OptionCard: React.FC<OptionCardProps> = ({ option, category, isSelected, maxReached, maxLimit }) => (
    <div
      className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 transform hover:scale-105 ${isSelected
          ? 'border-pink-500 bg-pink-50 shadow-lg scale-105'
          : maxReached
            ? 'border-gray-200 bg-gray-50 opacity-50 cursor-not-allowed'
            : 'border-gray-200 bg-white hover:border-pink-300 hover:shadow-md'
        }`}
      onClick={() => !maxReached && toggleSelection(category, option.id, maxLimit)}
    >
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-content font-bold text-pink-700">
          {option.thumb}
        </div>
        <div className="flex-1">
          <div className="font-semibold text-gray-800">{option.name}</div>
          <div className="text-sm text-gray-500">{option.desc}</div>
        </div>
        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${isSelected ? 'border-pink-500 bg-pink-500 text-white' : 'border-gray-300'
          }`}>
          {isSelected && <span className="text-xs">✓</span>}
        </div>
      </div>
    </div>
  );

  const StepHeader = () => (
    <div className="bg-gradient-to-r from-pink-500 to-rose-400 text-white p-6 rounded-t-2xl">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-2xl font-bold">Carrito de Snacks</h1>
          <p className="opacity-90">Vaso de 12 oz • MXN $28</p>
        </div>
        <div className="text-right">
          <div className="text-3xl mb-1">{steps[currentStep - 1]?.icon}</div>
          <div className="text-sm opacity-80">Paso {currentStep} de 4</div>
        </div>
      </div>

      {/* Stepper visual */}
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${step.id < currentStep
                  ? 'bg-white text-pink-500'
                  : step.id === currentStep
                    ? 'bg-pink-300 text-white ring-4 ring-pink-200'
                    : 'bg-pink-400/50 text-white/70'
                }`}>
                {step.id < currentStep ? '✓' : step.id}
              </div>
              <div className="text-xs mt-1 text-center">
                <div className="font-semibold">{step.title}</div>
                <div className="opacity-75">{step.subtitle}</div>
              </div>
            </div>
            {index < steps.length - 1 && (
              <div className={`flex-1 h-1 mx-2 rounded-full transition-all ${step.id < currentStep ? 'bg-white' : 'bg-pink-400/30'
                }`} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-800">Selecciona tus Papitas</h2>
              <span className="text-pink-600 font-semibold">
                {selections.papitas.size} / 3 seleccionadas
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {papitasOptions.map(option => (
                <OptionCard
                  key={option.id}
                  option={option}
                  category="papitas"
                  isSelected={selections.papitas.has(option.id)}
                  maxReached={selections.papitas.size >= 3 && !selections.papitas.has(option.id)}
                  maxLimit={3}
                />
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-800">Selecciona tus Gomitas</h2>
              <span className="text-pink-600 font-semibold">
                {selections.gomitas.size} / 3 seleccionadas
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {gomitasOptions.map(option => (
                <OptionCard
                  key={option.id}
                  option={option}
                  category="gomitas"
                  isSelected={selections.gomitas.has(option.id)}
                  maxReached={selections.gomitas.size >= 3 && !selections.gomitas.has(option.id)}
                  maxLimit={3}
                />
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-800">Añade Extras (Opcional)</h2>
              <span className="text-pink-600 font-semibold">
                {selections.extras.size} seleccionados
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {extrasOptions.map(option => (
                <OptionCard
                  key={option.id}
                  option={option}
                  category="extras"
                  isSelected={selections.extras.has(option.id)}
                  maxReached={false}
                  maxLimit={Infinity}
                />
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-6">Resumen de tu Pedido</h2>
            <div className="bg-pink-50 rounded-xl p-6 space-y-4">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-pink-500 to-rose-400 flex items-center justify-center text-white font-bold text-xl">
                  12oz
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Vaso de Snacks Personalizado</h3>
                  <p className="text-gray-600">Precio por vaso</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-pink-200">
                  <span className="font-medium">Papitas:</span>
                  <span className="text-gray-700">
                    {selections.papitas.size > 0
                      ? Array.from(selections.papitas).map(id =>
                        papitasOptions.find(p => p.id === id)?.name
                      ).join(', ')
                      : '—'
                    }
                  </span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-pink-200">
                  <span className="font-medium">Gomitas:</span>
                  <span className="text-gray-700">
                    {selections.gomitas.size > 0
                      ? Array.from(selections.gomitas).map(id =>
                        gomitasOptions.find(g => g.id === id)?.name
                      ).join(', ')
                      : '—'
                    }
                  </span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-pink-200">
                  <span className="font-medium">Extras:</span>
                  <span className="text-gray-700">
                    {selections.extras.size > 0
                      ? Array.from(selections.extras).map(id =>
                        extrasOptions.find(e => e.id === id)?.name
                      ).join(', ')
                      : '—'
                    }
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-pink-300">
                <span className="text-lg font-bold">Total:</span>
                <span className="text-2xl font-bold text-pink-600">MXN $28</span>
              </div>

              <div className="text-center text-sm text-gray-500 mt-4">
                Contacto WhatsApp: +52 1 555 555 5555
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
      <div className="max-w-4xl mx-auto">
        <StepHeader />

        <div className="bg-white rounded-b-2xl shadow-xl p-8">
          {renderStepContent()}

          {/* Navigation buttons */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={() => currentStep > 1 && setCurrentStep(currentStep - 1)}
              disabled={currentStep === 1}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${currentStep === 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
            >
              Anterior
            </button>

            <div className="flex gap-3">
              <button
                onClick={resetSelections}
                className="px-6 py-3 rounded-xl border border-pink-300 text-pink-600 font-semibold hover:bg-pink-50 transition-all"
              >
                Limpiar Todo
              </button>

              {currentStep < 4 ? (
                <button
                  onClick={() => canContinue(currentStep) && setCurrentStep(currentStep + 1)}
                  disabled={!canContinue(currentStep)}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all ${canContinue(currentStep)
                      ? 'bg-gradient-to-r from-pink-500 to-rose-400 text-white hover:from-pink-600 hover:to-rose-500 shadow-lg'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                >
                  Continuar
                </button>
              ) : (
                <button
                  onClick={() => alert('¡Pedido confirmado! Te contactaremos por WhatsApp')}
                  className="px-8 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-400 text-white font-semibold hover:from-green-600 hover:to-emerald-500 shadow-lg transition-all"
                >
                  Confirmar Pedido
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SnackStepper;