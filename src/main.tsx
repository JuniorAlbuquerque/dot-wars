import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '@/styles/layers.css.ts'
import { ConvexProvider, ConvexReactClient } from 'convex/react'
import { Analytics } from '@vercel/analytics/react'

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string)

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <ConvexProvider client={convex}>
    <App />
    <Analytics />
  </ConvexProvider>
  // </React.StrictMode>,
)
