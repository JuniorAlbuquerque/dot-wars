import { Fragment } from 'react'
import { RouterProvider } from 'react-router-dom'
import { appRouter } from './router'

function App() {
  return (
    <Fragment>
      <RouterProvider router={appRouter} />
    </Fragment>
  )
}

export default App
