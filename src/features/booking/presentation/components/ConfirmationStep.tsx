import React from 'react';
import { Calendar, User, Package as PackageIcon } from 'lucide-react';
import { EventDetails, UserInfo, Package } from '../types';

interface ConfirmationStepProps {
    eventDetails: EventDetails;
    userInfo: UserInfo;
    selectedPackages: Package[];
    calculateTotal: () => number;
    onConfirm: () => void;
}

export const ConfirmationStep: React.FC<ConfirmationStepProps> = ({
    eventDetails,
    userInfo,
    selectedPackages,
    calculateTotal,
    onConfirm
}) => {
    const total = calculateTotal();

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4 p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-zinc-800 rounded-lg border border-purple-200 dark:border-purple-800/50">
                    <h3 className="text-sm font-bold text-purple-900 dark:text-purple-200 flex items-center gap-2">
                        <Calendar size={16} className="text-purple-600 dark:text-purple-400" />
                        Detalles del Evento
                    </h3>
                    <div className="space-y-2 text-sm">
                        <div>
                            <span className="text-purple-600 dark:text-purple-400">Tipo:</span>
                            <span className="ml-2 font-medium text-gray-900 dark:text-gray-100">{eventDetails.eventType}</span>
                        </div>
                        <div>
                            <span className="text-purple-600 dark:text-purple-400">Fecha:</span>
                            <span className="ml-2 font-medium text-gray-900 dark:text-gray-100">
                                {new Date(eventDetails.date).toLocaleDateString('es-MX')}
                            </span>
                        </div>
                        <div>
                            <span className="text-purple-600 dark:text-purple-400">Hora:</span>
                            <span className="ml-2 font-medium text-gray-900 dark:text-gray-100">{eventDetails.time}</span>
                        </div>
                        <div>
                            <span className="text-purple-600 dark:text-purple-400">Ubicación:</span>
                            <span className="ml-2 font-medium text-gray-900 dark:text-gray-100">{eventDetails.location}</span>
                        </div>
                        <div>
                            <span className="text-purple-600 dark:text-purple-400">Invitados:</span>
                            <span className="ml-2 font-medium text-gray-900 dark:text-gray-100">{eventDetails.guests} personas</span>
                        </div>
                        <div>
                            <span className="text-purple-600 dark:text-purple-400">Duración:</span>
                            <span className="ml-2 font-medium text-gray-900 dark:text-gray-100">{eventDetails.duration} horas</span>
                        </div>
                    </div>
                </div>

                <div className="space-y-4 p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-zinc-800 rounded-lg border border-blue-200 dark:border-blue-800/50">
                    <h3 className="text-sm font-bold text-blue-900 dark:text-blue-200 flex items-center gap-2">
                        <User size={16} className="text-blue-600 dark:text-blue-400" />
                        Información de Contacto
                    </h3>
                    <div className="space-y-2 text-sm">
                        <div>
                            <span className="text-blue-600 dark:text-blue-400">Nombre:</span>
                            <span className="ml-2 font-medium text-gray-900 dark:text-gray-100">
                                {userInfo.name} {userInfo.lastName}
                            </span>
                        </div>
                        <div>
                            <span className="text-blue-600 dark:text-blue-400">Teléfono:</span>
                            <span className="ml-2 font-medium text-gray-900 dark:text-gray-100">{userInfo.phone}</span>
                        </div>
                        <div>
                            <span className="text-blue-600 dark:text-blue-400">Email:</span>
                            <span className="ml-2 font-medium text-gray-900 dark:text-gray-100">{userInfo.email}</span>
                        </div>
                        {userInfo.company && (
                            <div>
                                <span className="text-blue-600 dark:text-blue-400">Empresa:</span>
                                <span className="ml-2 font-medium text-gray-900 dark:text-gray-100">{userInfo.company}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="pt-4 border-t border-purple-200 dark:border-zinc-700">
                <h3 className="text-sm font-bold text-purple-900 dark:text-purple-200 mb-3 flex items-center gap-2">
                    <PackageIcon size={16} className="text-purple-600 dark:text-purple-400" />
                    Paquetes Seleccionados
                </h3>
                <div className="space-y-2">
                    {selectedPackages.map(pkg => (
                        <div key={pkg.id} className="flex items-center justify-between py-2 border-b border-purple-100 dark:border-zinc-700">
                            <div className="flex items-center gap-2">
                                <span className="text-xl">{pkg.image}</span>
                                <span className="text-sm font-medium text-gray-900 dark:text-white">{pkg.name}</span>
                            </div>
                            <span className="text-sm font-semibold text-purple-900 dark:text-purple-300">${pkg.price.toLocaleString()}</span>
                        </div>
                    ))}
                    <div className="pt-3 flex items-center justify-between">
                        <span className="text-base font-bold text-purple-900 dark:text-purple-200">Total</span>
                        <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                            ${total.toLocaleString()} MXN
                        </span>
                    </div>
                </div>
            </div>

            <button
                onClick={onConfirm}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold text-sm hover:from-pink-600 hover:to-purple-700 transition-all shadow-lg shadow-purple-300"
            >
                Confirmar Reservación
            </button>

            <p className="text-xs text-gray-500 text-center">
                Al confirmar, aceptas nuestros términos y condiciones de servicio
            </p>
        </div>
    );
};
