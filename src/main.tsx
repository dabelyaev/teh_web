import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ContextRootStore, store } from './mst/stores/RootStore.store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <ContextRootStore.Provider value={store}>
                <App />
            </ContextRootStore.Provider>
        </BrowserRouter>
    </React.StrictMode>,
)