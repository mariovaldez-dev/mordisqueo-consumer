import React from 'react';
import { UserInfo } from '../types';
import { AlertCircle } from 'lucide-react';

interface ContactInfoStepProps {
    userInfo: UserInfo;
    setUserInfo: (info: UserInfo) => void;
    canContinue: boolean;
}

export const ContactInfoStep: React.FC<ContactInfoStepProps> = ({
    userInfo,
    setUserInfo,
    canContinue
}) => {
    const handleUserInfoChange = (field: keyof UserInfo, value: string): void => {
        setUserInfo({ ...userInfo, [field]: value });
    };

    return (
        <div className="space-y-6">
            <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                            Nombre
                        </label>
                        <input
                            type="text"
                            placeholder="Ingresa tu nombre"
                            value={userInfo.name}
                            onChange={(e) => handleUserInfoChange('name', e.target.value)}
                            className="w-full px-4 py-2.5 text-sm border border-purple-300 dark:border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-zinc-700 text-gray-900 dark:text-white dark:placeholder-gray-400"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                            Apellido
                        </label>
                        <input
                            type="text"
                            placeholder="Ingresa tu apellido"
                            value={userInfo.lastName}
                            onChange={(e) => handleUserInfoChange('lastName', e.target.value)}
                            className="w-full px-4 py-2.5 text-sm border border-purple-300 dark:border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-zinc-700 text-gray-900 dark:text-white dark:placeholder-gray-400"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                        Número de Teléfono
                    </label>
                    <input
                        type="tel"
                        placeholder="+52 (xxx) xxx-xxxx"
                        value={userInfo.phone}
                        onChange={(e) => handleUserInfoChange('phone', e.target.value)}
                        className="w-full px-4 py-2.5 text-sm border border-purple-300 dark:border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-zinc-700 text-gray-900 dark:text-white dark:placeholder-gray-400"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                        Correo Electrónico
                    </label>
                    <input
                        type="email"
                        placeholder="tu.correo@ejemplo.com"
                        value={userInfo.email}
                        onChange={(e) => handleUserInfoChange('email', e.target.value)}
                        className="w-full px-4 py-2.5 text-sm border border-purple-300 dark:border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-zinc-700 text-gray-900 dark:text-white dark:placeholder-gray-400"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                        Empresa (Opcional)
                    </label>
                    <input
                        type="text"
                        placeholder="Nombre de tu empresa (opcional)"
                        value={userInfo.company}
                        onChange={(e) => handleUserInfoChange('company', e.target.value)}
                        className="w-full px-4 py-2.5 text-sm border border-purple-300 dark:border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-zinc-700 text-gray-900 dark:text-white dark:placeholder-gray-400"
                    />
                </div>
            </div>

            {!canContinue && (
                <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-500 rounded">
                    <AlertCircle className="text-orange-600 flex-shrink-0 mt-0.5" size={18} />
                    <p className="text-sm text-orange-800">
                        Por favor completa todos los campos obligatorios de contacto.
                    </p>
                </div>
            )}
        </div>
    );
};
