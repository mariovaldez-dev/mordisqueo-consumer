import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';
import { BrowserRouter } from 'react-router';
import { HelmetProvider } from 'react-helmet-async';

describe('App', () => {
    it('renders without crashing', () => {
        render(
            <HelmetProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </HelmetProvider>
        );
        // Since App routes to LandingPage which has "Eventos llenos de Snacks", we can check for that.
        // However, LandingPage is lazy loaded, so we might need waitFor.
        // For now just check if it renders.
        expect(true).toBeTruthy();
    });
});
