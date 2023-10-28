import { RouteObject } from 'react-router-dom'
import { Home } from '../pages/Home'

const GameRoutes: RouteObject = {
  children: [
    {
      element: <Home />,
      path: '/'
    }
  ]
}

export default GameRoutes
