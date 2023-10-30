import { GameContainer } from '@/components/GameContainer'
import { FC, useMemo } from 'react'
import { errorContainer, puppetsWrapper } from './styles.css'
import { Button } from '@/components/Button'

type FallbackErrorProps = {
  error: Error
}

export const FallbackError: FC<FallbackErrorProps> = ({ error }) => {
  const currentError = useMemo(() => {
    if (error?.message?.includes('validator')) {
      return 'Oh no, room not found!'
    }

    return 'Unexpected error occurred'
  }, [])

  return (
    <GameContainer>
      <div className={errorContainer}>
        <h1>{currentError}</h1>

        <div className={puppetsWrapper}>
          <svg
            width="120"
            height="120"
            viewBox="0 0 252 252"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="30" y="30" width="192" height="192" fill="#FF5895" />
            <path
              d="M148 86.9697C148 78.1499 155.15 71 163.97 71C172.271 71 179 77.7293 179 86.0303V95C179 101.075 174.075 106 168 106H162C154.268 106 148 99.732 148 92V86.9697Z"
              fill="#031E4B"
            />
            <path
              d="M70 86.9697C70 78.1499 77.1499 71 85.9697 71C94.2707 71 101 77.7293 101 86.0303V95C101 101.075 96.0751 106 90 106H84C76.268 106 70 99.732 70 92V86.9697Z"
              fill="#031E4B"
            />
            <path
              d="M153.113 133.243C156.786 141.321 148.783 150.122 140.153 148.055C134.367 146.67 128.639 145.679 124.543 145.851C120.985 146 116.88 146.938 112.857 148.188C104.671 150.733 95.595 144.247 96.7479 135.752C97.1064 133.11 98.4451 130.692 100.719 129.299C105.38 126.446 114.488 122 125.996 122C139.265 122 147.933 127.911 151.07 130.476C151.971 131.213 152.631 132.184 153.113 133.243Z"
              fill="#031E4B"
            />
            <rect x="30" y="197" width="192" height="25" fill="#E33481" />
            <rect x="30" y="172" width="192" height="25" fill="#F9418B" />
            <rect
              x="222"
              y="30"
              width="192"
              height="25"
              transform="rotate(90 222 30)"
              fill="#F44588"
            />
            <rect y="42" width="30" height="168" fill="#041B47" />
            <rect
              x="210"
              y="222"
              width="30"
              height="168"
              transform="rotate(90 210 222)"
              fill="#041B47"
            />
            <rect
              x="210"
              width="30"
              height="168"
              transform="rotate(90 210 0)"
              fill="#041B47"
            />
            <rect x="222" y="42" width="30" height="168" fill="#041C48" />
          </svg>

          <svg
            width="120"
            height="120"
            viewBox="0 0 252 252"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="30" y="30" width="192" height="192" fill="#FA932E" />
            <path
              d="M148 86.9697C148 78.1499 155.15 71 163.97 71C172.271 71 179 77.7293 179 86.0303V95C179 101.075 174.075 106 168 106H162C154.268 106 148 99.732 148 92V86.9697Z"
              fill="#031E4B"
            />
            <path
              d="M70 86.9697C70 78.1499 77.1499 71 85.9697 71C94.2707 71 101 77.7293 101 86.0303V95C101 101.075 96.0751 106 90 106H84C76.268 106 70 99.732 70 92V86.9697Z"
              fill="#031E4B"
            />
            <path
              d="M150.113 127.243C153.786 135.321 145.783 144.122 137.153 142.055C131.367 140.67 125.639 139.679 121.543 139.851C117.985 140 113.88 140.938 109.857 142.188C101.671 144.733 92.595 138.247 93.7479 129.752V129.752C94.1064 127.11 95.4451 124.692 97.7187 123.299C102.38 120.446 111.488 116 122.996 116C136.265 116 144.933 121.911 148.07 124.476C148.971 125.213 149.631 126.184 150.113 127.243V127.243Z"
              fill="#031E4B"
            />
            <rect x="30" y="197" width="192" height="25" fill="#F66143" />
            <rect
              x="210"
              y="222"
              width="30"
              height="168"
              transform="rotate(90 210 222)"
              fill="#041B47"
            />
            <rect x="30" y="172" width="192" height="25" fill="#FE7042" />
            <rect
              x="222"
              y="30"
              width="192"
              height="25"
              transform="rotate(90 222 30)"
              fill="#FE6D41"
            />
            <rect y="42" width="30" height="160" fill="#041B47" />
            <rect
              x="210"
              width="30"
              height="168"
              transform="rotate(90 210 0)"
              fill="#041B47"
            />
            <rect x="222" y="42" width="30" height="168" fill="#041C48" />
          </svg>
        </div>

        <Button>Create or Join</Button>
      </div>
    </GameContainer>
  )
}
