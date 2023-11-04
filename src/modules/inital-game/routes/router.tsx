import { RouteObject } from 'react-router-dom'
import LazyLoader from '@/components/LazyLoader'
import { lazy } from 'react'

const Home = LazyLoader({
  Component: lazy(() => import('@/modules/inital-game/pages/Home'))
})

const IntitalGameRoutes: RouteObject = {
  children: [
    {
      element: <Home />,
      path: '/'
    }
  ]
}

export default IntitalGameRoutes
