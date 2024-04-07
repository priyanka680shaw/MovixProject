import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import StoreIndex from './Storre/StoreIndex.jsx'
console.log(StoreIndex)
ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <Provider store={StoreIndex}>
    <App />
    </Provider>
  
  //</React.StrictMode>,
)
