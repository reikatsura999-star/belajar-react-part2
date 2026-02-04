import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import ReactDom from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './app/store'

const root =ReactDom.createRoot(document.getElementById('root')!);root.render(
  <React.StrictMode>
   <Provider store={store}>
    <App/>
   </Provider>
  </React.StrictMode>,
)
