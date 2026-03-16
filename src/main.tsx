import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { CapacitorUpdater } from '@capgo/capacitor-updater';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

(async () => {
  try {
    const result = await CapacitorUpdater.notifyAppReady();
    console.log('Capgo notifyAppReady success:', result);
  } catch (error) {
    console.error('Capgo notifyAppReady failed:', error);
  }
})();