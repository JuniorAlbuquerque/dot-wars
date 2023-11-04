import { FunctionComponent, useMemo } from 'react'

type PuppetIconProps = {
  color: 'primary' | 'secondary'
}

export const PuppetIcon: FunctionComponent<PuppetIconProps> = ({ color }) => {
  const colors = useMemo(() => {
    if (color === 'primary') {
      return {
        main: '#FA932E',
        line1: '#F66143',
        line2: '#FE7042',
        line3: '#FE6D41'
      }
    }

    return {
      main: '#FF5895',
      line1: '#E33481',
      line2: '#F9418B',
      line3: '#F44588'
    }
  }, [color])

  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 252 252"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="30" y="30" width="192" height="192" fill={colors.main} />
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
      <rect x="30" y="197" width="192" height="25" fill={colors.line1} />
      <rect x="30" y="172" width="192" height="25" fill={colors.line2} />
      <rect
        x="222"
        y="30"
        width="192"
        height="25"
        transform="rotate(90 222 30)"
        fill={colors.line3}
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
  )
}
