import React from 'react';
import ReactDOM from 'react-dom/client';

import { NextUIProvider } from '@nextui-org/react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router.tsx';

import './index.css';
import { TansTackProvider } from './plugins/TansTackProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TansTackProvider>
      <NextUIProvider>
        <main className="dark text-foreground bg-background">
          <RouterProvider router={router} />
        </main>
      </NextUIProvider>
    </TansTackProvider>
  </React.StrictMode>
);
