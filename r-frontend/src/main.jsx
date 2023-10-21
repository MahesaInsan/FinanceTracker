import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ContextProvider } from './contexts/ContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
{/*     <ContextProvider> */}
      {/* <RouterProvider router={router}/> */}
      <App />
{/*     </ContextProvider> */}
  </React.StrictMode>,
)
