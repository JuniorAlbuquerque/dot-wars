import { Settings } from '@/components/Settings'
import { Fragment, FunctionComponent } from 'react'
import { Outlet } from 'react-router-dom'

export const Wrapper: FunctionComponent = () => {
  return (
    <Fragment>
      <Settings />
      <Outlet />
    </Fragment>
  )
}
