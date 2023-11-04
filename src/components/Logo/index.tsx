import { FC } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { child, container } from './variants'
import { logoStyle } from './styles.css'

interface Props extends HTMLMotionProps<'div'> {
  text?: string
  delay?: number
  show?: boolean
  duration?: number
}

const Logo: FC<Props> = ({
  text = 'DOT WARS!',
  delay = 0,
  duration = 0.08,
  show = true,
  ...props
}: Props) => {
  const letters = Array.from(text)

  return (
    <motion.h1
      variants={container(duration, delay)}
      initial="hidden"
      animate={show ? 'visible' : 'hidden'}
      className={logoStyle}
      {...props}
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child}>
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.h1>
  )
}

export default Logo
