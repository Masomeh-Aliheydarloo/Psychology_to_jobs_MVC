

import React from 'react' //npm i --save-dev @types/react
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'//npm i react-router-dom  npm i @types/react-router-dom
import ReactDOM from 'react-dom/client' //npm i --save-dev @types/react-dom
import { AuthProvider } from './components/AuthContext.tsx'





const container = document.getElementById('root');
export const root = ReactDOM.createRoot(container as HTMLElement);
root.render(

    <React.StrictMode>
      
        <BrowserRouter>
          <AuthProvider>
            <App />
            </AuthProvider>
        </BrowserRouter>
       
    </React.StrictMode>

);
