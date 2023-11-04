import IntitalGameRoutes from '@/modules/inital-game/routes/router'
import LocalGameRoutes from '@/modules/local-game/routes/router'
import OnlineGameRoutes from '@/modules/online-game/router/router'
import { createBrowserRouter } from 'react-router-dom'
import { Wrapper } from './Wrapper'
import LazyLoader from '@/components/LazyLoader'
import { lazy } from 'react'

const NotFound = LazyLoader({
  Component: lazy(() => import('./NotFound'))
})

export const appRouter = createBrowserRouter([
  {
    element: <Wrapper />,
    children: [
      {
        children: [IntitalGameRoutes, LocalGameRoutes, OnlineGameRoutes]
      },
      {
        element: <NotFound />,
        path: '*'
      }
    ]
  }
])
