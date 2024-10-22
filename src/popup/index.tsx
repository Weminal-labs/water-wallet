import React from 'react'
import ReactDOM from 'react-dom/client'
import { Router } from '../router'
import './index.css'
import { AlgorandClientProvider } from '@/contexts/AlgorandClientProvider'

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <AlgorandClientProvider>
      <Router />
    </AlgorandClientProvider>
  </React.StrictMode>,
)
