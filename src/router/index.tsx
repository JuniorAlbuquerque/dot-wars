import IntitalGameRoutes from '@/modules/inital-game/routes/router'
import LocalGameRoutes from '@/modules/local-game/routes/router'
import OnlineGameRoutes from '@/modules/online-game/router/router'
import { createBrowserRouter } from 'react-router-dom'
import { Wrapper } from './Wrapper'

export const appRouter = createBrowserRouter([
  {
    element: <Wrapper />,
    children: [
      {
        children: [IntitalGameRoutes, LocalGameRoutes, OnlineGameRoutes]
      }
      // {
      //   element: <Unauthorized />,
      //   path: '/401'
      // }
    ]
  }
])
