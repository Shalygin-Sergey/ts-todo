import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './gui/app/index'
import './gui/styles/reset.scss'
import './gui/styles/common.scss'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
