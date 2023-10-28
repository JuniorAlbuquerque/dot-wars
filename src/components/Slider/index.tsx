import { FC, useState } from 'react'
import {
  sliderLevel,
  sliderLevelVar,
  sliderStyle,
  sliderWrapper
} from './styles.css'
import { assignInlineVars } from '@vanilla-extract/dynamic'

export const Slider: FC = () => {
  const [level, setLevel] = useState(100)

  return (
    <div className={sliderWrapper}>
      <input
        className={sliderStyle}
        type="range"
        min="0"
        max="100"
        step="1"
        value={level}
        onChange={(event) => {
          const value = event.target.value
          setLevel(Number(value))
        }}
      />

      <div
        className={sliderLevel}
        style={assignInlineVars({ [sliderLevelVar]: `${level}%` })}
      ></div>
    </div>
  )
}
