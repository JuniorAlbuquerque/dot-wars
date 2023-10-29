import { RouteObject } from 'react-router-dom'
import { LocalGame } from '../pages/LocalGame'

const LocalGameRoutes: RouteObject = {
  children: [
    {
      element: <LocalGame />,
      path: '/veia'
    }
  ]
}

export default LocalGameRoutes