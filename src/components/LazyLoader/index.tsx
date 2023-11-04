/* eslint-disable @typescript-eslint/no-explicit-any */
import { Suspense, LazyExoticComponent, FunctionComponent } from 'react'
import { GameContainer } from '../GameContainer'
import { loader } from '@/modules/online-game/components/roomValidator/styles.css'

interface LazyLoaderProps<T> {
  Component: LazyExoticComponent<FunctionComponent<T>>
}

const LazyLoader = <T,>({ Component }: LazyLoaderProps<T>) => {
  const WrappedComponent = (props: T) => {
    return (
      <Suspense
        fallback={
          <GameContainer>
            <div className={loader}></div>
          </GameContainer>
        }
      >
        <Component {...(props as any)} />
      </Suspense>
    )
  }

  WrappedComponent.displayName = `LazyLoader(${Component.name || 'Component'})`

  return WrappedComponent
}

export default LazyLoader
