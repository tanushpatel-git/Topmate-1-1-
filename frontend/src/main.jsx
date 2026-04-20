import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
import { BrowserRouter } from 'react-router'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ShopcontextProvider from "./Context/ShopContext";

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
 <ShopcontextProvider>   
            <App />
          </ShopcontextProvider>
        </QueryClientProvider>
      </Provider>
    </BrowserRouter>
)
