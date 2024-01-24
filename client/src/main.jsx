import React from 'react'
import ReactDOM from 'react-dom/client'
import Routes from './Routes'
import './index.css'
import UserProvider from './context/userProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
    <Routes />
    </UserProvider>
  </React.StrictMode>,
)
