import { RouteObject } from 'react-router-dom'
import LazyLoader from '@/components/LazyLoader'
import { lazy } from 'react'

const LocalGame = LazyLoader({
  Component: lazy(() => import('@/modules/local-game/pages/LocalGame'))
})

const LocalGameRoutes: RouteObject = {
  children: [
    {
      element: <LocalGame />,
      path: '/local-war'
    }
  ]
}

export default LocalGameRoutes
