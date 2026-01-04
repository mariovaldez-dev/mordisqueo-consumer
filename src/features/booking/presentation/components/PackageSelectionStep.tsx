import React from 'react';
import { Package, EventDetails } from '../types';
import { Check, AlertCircle } from 'lucide-react';

interface PackageSelectionStepProps {
    packages: Package[];
    selectedPackages: Package[];
    eventDetails: EventDetails;
    togglePackage: (pkg: Package) => void;
    canContinue: boolean;
    calculateTotal: () => number;
}

export const PackageSelectionStep: React.FC<PackageSelectionStepProps> = ({
    packages,
    selectedPackages,
    eventDetails,
    togglePackage,
    canContinue,
    calculateTotal
}) => {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 gap-4">
                {packages.map(pkg => {
                    const isSelected = selectedPackages.some(p => p.id === pkg.id);
                    const isCompatible = eventDetails.guests <= pkg.maxGuests;

                    return (
                        <button
                            key={pkg.id}
                            onClick={() => isCompatible && togglePackage(pkg)}
                            disabled={!isCompatible}
                            className={`relative text-left p-4 rounded-lg border-2 transition-all ${isSelected
                                ? 'border-purple-500 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/40 dark:to-pink-900/40 shadow-lg shadow-purple-200 dark:shadow-none'
                                : isCompatible
                                    ? 'border-purple-200 dark:border-zinc-600 bg-white dark:bg-zinc-700 hover:border-purple-400 dark:hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-zinc-600'
                                    : 'border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900 opacity-50 cursor-not-allowed'
                                }`}
                        >
                            <div className="flex items-start gap-4">
                                <div className="text-3xl">{pkg.image}</div>

                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-1">
                                        <h3 className="text-base font-semibold text-gray-900 dark:text-white">{pkg.name}</h3>
                                        {isSelected && (
                                            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full p-1">
                                                <Check size={14} />
                                            </div>
                                        )}
                                    </div>
                                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{pkg.description}</p>

                                    <div className="flex items-center justify-between">
                                        <span className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                            ${pkg.price.toLocaleString()} MXN
                                        </span>
                                        <span className="text-xs text-purple-600 dark:text-purple-400">
                                            Hasta {pkg.maxGuests} invitados
                                        </span>
                                    </div>

                                    {!isCompatible && (
                                        <p className="text-xs text-red-600 dark:text-red-400 mt-2">
                                            No disponible para {eventDetails.guests} invitados
                                        </p>
                                    )}
                                </div>
                            </div>
                        </button>
                    );
                })}
            </div>

            {selectedPackages.length > 0 && (
                <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-zinc-700 dark:to-zinc-800 border-2 border-purple-300 dark:border-purple-700 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-purple-900 dark:text-purple-300">Paquetes Seleccionados</span>
                        <span className="text-sm font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{selectedPackages.length}</span>
                    </div>
                    <div className="space-y-2">
                        {selectedPackages.map(pkg => (
                            <div key={pkg.id} className="flex items-center justify-between text-sm">
                                <span className="text-gray-700 dark:text-gray-200">{pkg.name}</span>
                                <span className="font-semibold text-purple-900 dark:text-purple-300">${pkg.price.toLocaleString()}</span>
                            </div>
                        ))}
                        <div className="pt-2 border-t border-purple-300 dark:border-purple-600 flex items-center justify-between">
                            <span className="font-bold text-purple-900 dark:text-purple-300">Total</span>
                            <span className="font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent text-lg">
                                ${calculateTotal().toLocaleString()} MXN
                            </span>
                        </div>
                    </div>
                </div>
            )}

            {!canContinue && (
                <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-500 rounded">
                    <AlertCircle className="text-orange-600 flex-shrink-0 mt-0.5" size={18} />
                    <p className="text-sm text-orange-800">
                        Por favor selecciona al menos un paquete antes de continuar.
                    </p>
                </div>
            )}
        </div>
    );
};
