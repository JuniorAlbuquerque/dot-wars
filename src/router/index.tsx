import IntitalGameRoutes from '@/domains/inital-game/routes/router'
import LocalGameRoutes from '@/domains/local-game/routes/router'
import OnlineGameRoutes from '@/domains/online-game/router/router'
import { createBrowserRouter } from 'react-router-dom'

export const appRouter = createBrowserRouter([
  {
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
