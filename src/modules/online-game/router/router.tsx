import { RouteObject } from 'react-router-dom'
import { CreateRoom } from '../pages/CreateRoom'
import { OnlineGame } from '../pages/Game'
import { RoomValidator } from '../components/roomValidator'
import { ErrorBoundary } from 'react-error-boundary'
import { FallbackError } from '../components/error'

const OnlineGameRoutes: RouteObject = {
  children: [
    {
      element: <CreateRoom />,
      path: '/create-war'
    },
    {
      element: <CreateRoom />,
      path: '/create-war/:room_id'
    },
    {
      element: (
        <ErrorBoundary
          fallbackRender={({ error }) => <FallbackError error={error} />}
        >
          <RoomValidator />
        </ErrorBoundary>
      ),
      children: [
        {
          element: <OnlineGame />,
          path: '/war/:room_id'
        }
      ]
    }
  ]
}

export default OnlineGameRoutes
