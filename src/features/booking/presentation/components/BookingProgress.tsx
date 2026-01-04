import React from 'react';

interface BookingProgressProps {
    currentStep: number;
    totalSteps: number;
    title: string;
}

export const BookingProgress: React.FC<BookingProgressProps> = ({ currentStep, totalSteps, title }) => {
    return (
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-8 pr-8 pl-8 pb-2 sm:bg-primary lg:bg-white dark:lg:bg-zinc-800 dark:sm:bg-zinc-900 lg:text-primary sm:text-white dark:text-white transition-colors duration-300">
            <h1 className="text-xl font-bold">
                {title}
            </h1>
            <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
                <div className="flex items-center gap-2">
                    <span className="text-sm font-bold">
                        {currentStep}/{totalSteps}
                    </span>
                    <span className="text-xs font-medium">completado</span>
                </div>
                <div className="w-32 h-2 border sm:bg-white border-gray-300 dark:border-zinc-600 dark:bg-zinc-700 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-purple-500 transition-all duration-300"
                        style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                    />
                </div>
            </div>
        </div>
    );
};
