import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from '@mui/material'

import { ProSidebarProvider} from 'react-pro-sidebar'

import theme from './config/theme'

import App from './App.tsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ProSidebarProvider >
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    </ProSidebarProvider >
  </React.StrictMode>,
)
