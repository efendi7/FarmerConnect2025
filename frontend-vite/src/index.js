// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// 1. Import React Query
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
// (Opsional) Devtools untuk debugging
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// 2. Buat instance QueryClient
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 3. Bungkus App dengan QueryClientProvider */}
    <QueryClientProvider client={queryClient}>
      <App />
      {/* 4. (Opsional) Tampilkan React Query Devtools */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
