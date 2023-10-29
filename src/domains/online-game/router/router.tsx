import { RouteObject } from 'react-router-dom'
import { CreateRoom } from '../pages/CreateRoom'

const OnlineGameRoutes: RouteObject = {
  children: [
    {
      element: <CreateRoom />,
      path: '/create-war'
    }
  ]
}

export default OnlineGameRoutes
