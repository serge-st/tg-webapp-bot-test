import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from '@/app/App.tsx';
import '@/app/styles/index.css';
import '@/shared/config/i18n.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
