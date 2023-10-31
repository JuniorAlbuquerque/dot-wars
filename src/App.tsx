import { Fragment } from 'react'
import { RouterProvider } from 'react-router-dom'
import { appRouter } from './router'
import { inject } from '@vercel/analytics'

inject()

function App() {
  return (
    <Fragment>
      <RouterProvider router={appRouter} />
    </Fragment>
  )
}

export default App
