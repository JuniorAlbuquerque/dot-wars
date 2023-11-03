import { FC, useEffect, useMemo, useState } from 'react'
import {
  sliderLevel,
  sliderLevelVar,
  sliderStyle,
  sliderWrapper
} from './styles.css'
import { assignInlineVars } from '@vanilla-extract/dynamic'

type SliderProps = {
  level: number
  max: number
  min: number
  step: number
  onChange: (level: number) => void
}

export const Slider: FC<SliderProps> = ({
  level,
  min,
  max,
  step,
  onChange
}) => {
  const [currentLevel, setLevel] = useState(level)

  const currentSliderWidth = useMemo(() => {
    return (currentLevel / max) * 100
  }, [currentLevel])

  useEffect(() => {
    if (level) {
      setLevel(level)
    }
  }, [level])

  return (
    <div className={sliderWrapper}>
      <input
        className={sliderStyle}
        type="range"
        min={min}
        max={max}
        step={step}
        value={currentLevel}
        onChange={(event) => {
          const value = event.target.value

          if (onChange) {
            onChange(Number(value))
          }

          setLevel(Number(value))
        }}
      />

      <div
        className={sliderLevel}
        style={assignInlineVars({ [sliderLevelVar]: `${currentSliderWidth}%` })}
      ></div>
    </div>
  )
}
