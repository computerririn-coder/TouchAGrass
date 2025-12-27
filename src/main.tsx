import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
createRoot(document.getElementById('root')!).render(
<BrowserRouter>
  <GoogleOAuthProvider clientId="720837494938-32fj38ji7vukj57040p5cu211tb3ed4h.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>

</BrowserRouter>


)
