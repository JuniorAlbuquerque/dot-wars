import { FunctionComponent, useState } from 'react'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import useSound from 'use-sound'
import {
  buttonSettings,
  controlsContainer,
  logoImg,
  menuTitle,
  settingsButton,
  settingsContainer,
  settingsModalContainer,
  sliderWrapper
} from './styles.css'
import { Modal } from '../Modal'
import { Reveal } from '../Reveal'
import { ImgLogo } from '../ImgLogo'
import { Slider } from '../Slider'
import { useControlStore } from '@/store/control/control.store'
import unlock from '@/assets/material_product_sounds/wav/primary/ui_unlock.wav'
import { useLocation, useNavigate } from 'react-router-dom'

export const Settings: FunctionComponent = () => {
  const [openSettings, setOpenSettings] = useState(false)
  const effectsVolume = useControlStore((state) => state.effectsVolume)
  const navigate = useNavigate()
  const location = useLocation()

  const [playClick] = useSound(unlock, {
    volume: effectsVolume
  })

  return (
    <div className={settingsContainer}>
      <button
        aria-label="Open settings"
        className={settingsButton}
        onClick={() => {
          setOpenSettings(true)
        }}
        onMouseDown={() => {
          playClick()
        }}
      >
        <ImgLogo />
      </button>

      <Modal open={openSettings}>
        <div className={settingsModalContainer}>
          <div className={logoImg}>
            <Reveal delay={0.15}>
              <ImgLogo />
            </Reveal>
          </div>

          <h1 className={menuTitle}>Main menu</h1>

          <div className={controlsContainer}>
            <div className={sliderWrapper}>
              <p>Sound effects</p>
              <Slider
                level={effectsVolume}
                min={0}
                max={2}
                step={0.1}
                onChange={(value) => {
                  useControlStore.setState({
                    effectsVolume: value
                  })
                }}
              />
            </div>

            <button
              className={buttonSettings}
              onClick={() => {
                setOpenSettings(false)
              }}
              onMouseDown={() => {
                playClick()
              }}
            >
              Close
            </button>

            {location.pathname?.includes('war') && (
              <button
                className={buttonSettings}
                onClick={() => {
                  navigate('/')
                  setOpenSettings(false)
                }}
                onMouseDown={() => {
                  playClick()
                }}
              >
                Go to Home
              </button>
            )}

            <button
              className={buttonSettings}
              onClick={() => {
                window.open(
                  'https://github.com/JuniorAlbuquerque/dot-wars',
                  '_blank'
                )
              }}
              onMouseDown={() => {
                playClick()
              }}
            >
              Info
            </button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
