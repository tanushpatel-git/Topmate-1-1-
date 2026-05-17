import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
import { BrowserRouter } from 'react-router'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './bones/registry'
import "@stream-io/video-react-sdk/dist/css/styles.css";


const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
      </Provider>
    </BrowserRouter>
)
