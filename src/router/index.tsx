import GameRoutes from '@/domains/Game/routes/router'
import { createBrowserRouter } from 'react-router-dom'

export const appRouter = createBrowserRouter([
  {
    children: [
      {
        children: [GameRoutes]
      }
      // {
      //   element: <Unauthorized />,
      //   path: '/401'
      // }
    ]
  }
])
