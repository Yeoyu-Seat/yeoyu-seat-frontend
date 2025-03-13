import '@/index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import RootProvider from './providers/root-provider';
import Router from './routes';

createRoot(document.getElementById('root')!).render(
  <RootProvider>
    <StrictMode>
      <Router />
    </StrictMode>
  </RootProvider>,
);
