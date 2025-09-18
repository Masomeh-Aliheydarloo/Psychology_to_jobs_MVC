

import React from 'react'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'//npm i react-router-dom  npm i @types/react-router-dom
import ReactDOM from 'react-dom/client'
import { AuthProvider } from './components/AuthContext.tsx'

 import { HelmetProvider } from 'react-helmet-async'; //npm install react-helmet-async@latest



const container = document.getElementById('root');
export const root = ReactDOM.createRoot(container as HTMLElement);
root.render(

    <React.StrictMode>
       <HelmetProvider>
        <BrowserRouter>
          <AuthProvider>
            <App />
            </AuthProvider>
        </BrowserRouter>
       </HelmetProvider>
    </React.StrictMode>

);
