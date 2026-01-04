import React from 'react';
import { AlertCircle } from 'lucide-react';
import { EventDetails, EventType } from '../types';

interface EventDetailsStepProps {
    eventDetails: EventDetails;
    setEventDetails: (details: EventDetails) => void;
    eventTypes: EventType[];
    canContinue: boolean;
}

export const EventDetailsStep: React.FC<EventDetailsStepProps> = ({
    eventDetails,
    setEventDetails,
    eventTypes,
    canContinue
}) => {
    const handleEventDetailsChange = (field: keyof EventDetails, value: string | number): void => {
        setEventDetails({ ...eventDetails, [field]: value });
    };

    return (
        <div className="space-y-6">
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium mb-2 dark:text-gray-200">
                        ¿Qué tipo de evento estás planeando?
                    </label>
                    <div className="relative">
                        <select
                            value={eventDetails.eventType}
                            onChange={(e) => handleEventDetailsChange('eventType', e.target.value)}
                            className="w-full pl-4 pr-10 py-3 text-sm border-2 border-purple-100 dark:border-zinc-600 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 dark:focus:ring-purple-900 transition-all bg-purple-50/30 dark:bg-zinc-700 text-gray-700 dark:text-white font-medium cursor-pointer appearance-none"
                        >
                            <option value="">Selecciona el tipo de evento</option>
                            {eventTypes.map(type => (
                                <option key={type} value={type} className="dark:bg-zinc-700">{type}</option>
                            ))}
                        </select>
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-purple-500 dark:text-purple-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                            Fecha del Evento
                        </label>
                        <div className="relative">
                            <input
                                type="date"
                                value={eventDetails.date}
                                onChange={(e) => handleEventDetailsChange('date', e.target.value)}
                                className="w-full pl-4 pr-10 py-3 text-sm border-2 border-purple-100 dark:border-zinc-600 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 dark:focus:ring-purple-900 transition-all bg-purple-50/30 dark:bg-zinc-700 text-gray-700 dark:text-white font-medium cursor-pointer appearance-none [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                                min={new Date().toISOString().split('T')[0]}
                            />
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-purple-500 dark:text-purple-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                            Hora de Inicio
                        </label>
                        <div className="relative">
                            <input
                                type="time"
                                value={eventDetails.time}
                                onChange={(e) => handleEventDetailsChange('time', e.target.value)}
                                className="w-full pl-4 pr-10 py-3 text-sm border-2 border-purple-100 dark:border-zinc-600 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 dark:focus:ring-purple-900 transition-all bg-purple-50/30 dark:bg-zinc-700 text-gray-700 dark:text-white font-medium cursor-pointer appearance-none [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                            />
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-purple-500 dark:text-purple-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                        Ubicación del Evento
                    </label>
                    <input
                        type="text"
                        placeholder="Ingresa la dirección del evento"
                        value={eventDetails.location}
                        onChange={(e) => handleEventDetailsChange('location', e.target.value)}
                        className="w-full px-4 py-2.5 text-sm border border-purple-300 dark:border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-zinc-700 text-gray-700 dark:text-white dark:placeholder-gray-400"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                            Número de Invitados
                        </label>
                        <input
                            type="number"
                            min="10"
                            max="300"
                            value={eventDetails.guests}
                            onChange={(e) => handleEventDetailsChange('guests', parseInt(e.target.value))}
                            className="w-full px-4 py-2.5 text-sm border border-purple-300 dark:border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-zinc-700 text-gray-700 dark:text-white"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                            Duración (horas)
                        </label>
                        <input
                            type="number"
                            min="2"
                            max="12"
                            value={eventDetails.duration}
                            onChange={(e) => handleEventDetailsChange('duration', parseInt(e.target.value))}
                            className="w-full px-4 py-2.5 text-sm border border-purple-300 dark:border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-zinc-700 text-gray-700 dark:text-white"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                        Solicitudes Especiales (Opcional)
                    </label>
                    <textarea
                        placeholder="Describe cualquier requerimiento especial para tu evento..."
                        value={eventDetails.specialRequests}
                        onChange={(e) => handleEventDetailsChange('specialRequests', e.target.value)}
                        className="w-full px-4 py-2.5 text-sm border border-purple-300 dark:border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none bg-white dark:bg-zinc-700 text-gray-700 dark:text-white dark:placeholder-gray-400"
                        rows={3}
                    />
                </div>
            </div>

            {!canContinue && (
                <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-500 rounded">
                    <AlertCircle className="text-orange-600 flex-shrink-0 mt-0.5" size={18} />
                    <p className="text-sm text-orange-800">
                        Por favor completa todos los campos obligatorios antes de continuar al siguiente paso.
                    </p>
                </div>
            )}
        </div>
    );
};
