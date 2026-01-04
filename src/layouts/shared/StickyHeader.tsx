import React from 'react';
import ToggleTheme from '../../shared/components/buttons/ToggleTheme';
import { useScrollDirection } from '../../shared/hooks/useScrollDirection';
import logo from '../../assets/images/logo.svg';
import { useNavigate } from 'react-router-dom';

const StickyHeader: React.FC = () => {
    const { scrollDirection, isScrolled } = useScrollDirection();
    const navigate = useNavigate();

    return (
        <header
            className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'
                } ${isScrolled
                    ? 'bg-white/70 dark:bg-zinc-900/80 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-zinc-800'
                    : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo Area */}
                    <div className="flex-shrink-0 flex items-center">
                        <img
                            onClick={() => navigate('/')}
                            className="h-10 w-auto transition-transform hover:scale-105"
                            src={logo}
                            alt="Mordisqueo Logo"
                        />
                    </div>

                    {/* Right Side Actions */}
                    <div className="flex items-center gap-4">
                        <ToggleTheme />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default StickyHeader;
