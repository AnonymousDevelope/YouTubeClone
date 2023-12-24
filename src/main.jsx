import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './scss/index.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import { TubeCloneContextProvider } from './context/context.jsx';
import { BrowserRouter } from 'react-router-dom';
import Loading from './components/loading.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TubeCloneContextProvider>
      <Suspense fallback={(<Loading/>)}>
          <App />
      </Suspense>
    </TubeCloneContextProvider>
  </React.StrictMode>,
)
