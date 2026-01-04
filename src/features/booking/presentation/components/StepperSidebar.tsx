import React from 'react';
import { Check } from 'lucide-react';
import { Step } from '../types';

interface StepperSidebarProps {
    steps: Step[];
    currentStep: number;
}

export const StepperSidebar: React.FC<StepperSidebarProps> = ({ steps, currentStep }) => {
    return (
        <div className="hidden lg:block col-span-3 bg-primary p-8 border-r border-purple-400">
            <div className="mb-8">
                <h2 className="text-lg font-bold text-white mb-1">Reserva tu Evento</h2>
                <p className="text-xs text-pink-100">
                    Completa los pasos necesarios para crear tu reservación.
                </p>
            </div>

            <div className="space-y-6">
                {steps.map((step, index) => {
                    const isCompleted = step.id < currentStep;
                    const isCurrent = step.id === currentStep;

                    return (
                        <div key={step.id} className="relative">
                            {index < steps.length - 1 && (
                                <div
                                    className={`absolute left-3 top-8 w-0.5 h-12 ${isCompleted ? 'bg-green-300' : 'bg-white/30'
                                        }`}
                                />
                            )}

                            <div className="flex items-start gap-3 relative z-10">
                                <div
                                    className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${isCompleted
                                        ? 'bg-green-400 text-white shadow-lg shadow-green-400/50'
                                        : isCurrent
                                            ? 'bg-white border-2 border-yellow-300 shadow-lg shadow-yellow-300/50'
                                            : 'bg-white/20 border-2 border-white/40'
                                        }`}
                                >
                                    {isCompleted ? (
                                        <Check size={14} className="font-bold" />
                                    ) : isCurrent ? (
                                        <div className="w-2.5 h-2.5 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse" />
                                    ) : (
                                        <div className="w-2.5 h-2.5 bg-white/50 rounded-full" />
                                    )}
                                </div>

                                <div className="flex-1">
                                    <p
                                        className={`text-sm font-medium ${isCurrent ? 'text-white font-bold' : isCompleted ? 'text-pink-100' : 'text-white/60'
                                            }`}
                                    >
                                        {step.title}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
