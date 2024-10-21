import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes } from './routes'
createRoot(document.getElementById('root')).render(
  <StrictMode>
 <Routes />
  </StrictMode>,
)
