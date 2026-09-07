import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { AccessibilityProvider } from './context/AccessibilityContext';
import { AnalyticsBootstrap } from './components/AnalyticsBootstrap';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AccessibilityProvider>
      <AnalyticsBootstrap />
      <App />
    </AccessibilityProvider>
  </StrictMode>,
);
