import React from 'react';
import { X, ShoppingCart } from 'lucide-react';

interface Package {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
}

interface SelectionSummaryProps {
    selectedPackages: Package[];
    onRemovePackage: (packageId: string) => void;
    totalPrice: number;
}

export const SelectionSummary: React.FC<SelectionSummaryProps> = ({
    selectedPackages,
    onRemovePackage,
    totalPrice
}) => {
    if (selectedPackages.length === 0) {
        return (
            <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-6">
                <div className="flex items-center gap-3 mb-4">
                    <ShoppingCart className="text-gray-400" size={24} />
                    <h3 className="text-lg font-semibold text-gray-800">Tu Selección</h3>
                </div>
                <p className="text-sm text-gray-500 text-center py-8">
                    Selecciona paquetes para comenzar
                </p>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-6 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
                <ShoppingCart className="text-blue-600" size={24} />
                <h3 className="text-lg font-semibold text-gray-800">Tu Selección</h3>
                <span className="ml-auto bg-blue-100 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {selectedPackages.length}
                </span>
            </div>

            <div className="space-y-3 mb-6">
                {selectedPackages.map((pkg) => (
                    <div
                        key={pkg.id}
                        className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100 group hover:border-gray-200 transition-colors"
                    >
                        <div className="text-2xl">{pkg.image}</div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">{pkg.name}</p>
                            <p className="text-xs text-gray-500 mt-0.5">${pkg.price.toLocaleString()}</p>
                        </div>
                        <button
                            onClick={() => onRemovePackage(pkg.id)}
                            className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 hover:text-red-500 p-1"
                            aria-label={`Remover ${pkg.name}`}
                        >
                            <X size={16} />
                        </button>
                    </div>
                ))}
            </div>

            <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Subtotal</span>
                    <span className="text-sm font-medium text-gray-900">
                        ${totalPrice.toLocaleString()} MXN
                    </span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-base font-semibold text-gray-900">Total</span>
                    <span className="text-lg font-bold text-blue-600">
                        ${totalPrice.toLocaleString()} MXN
                    </span>
                </div>
            </div>

            <p className="text-xs text-gray-500 mt-4 text-center">
                Los precios son estimados y pueden variar
            </p>
        </div>
    );
};
