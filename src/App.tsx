import { Fragment } from 'react'
import { RouterProvider } from 'react-router-dom'
import { appRouter } from './router'
import { Analytics } from '@vercel/analytics/react'

function App() {
  return (
    <Fragment>
      <RouterProvider router={appRouter} />
      <Analytics />
    </Fragment>
  )
}

export default App
