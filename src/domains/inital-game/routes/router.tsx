import { RouteObject } from 'react-router-dom'
import { Home } from '../pages/Home'

const IntitalGameRoutes: RouteObject = {
  children: [
    {
      element: <Home />,
      path: '/'
    }
  ]
}

export default IntitalGameRoutes
