import { FC } from 'react'
import { motion, Variants, HTMLMotionProps } from 'framer-motion'
import { css } from '@styled/css'

interface Props extends HTMLMotionProps<'div'> {
  text?: string
  delay?: number
  show?: boolean
  duration?: number
}

const Logo: FC<Props> = ({
  text = 'SuPER VÉIA',
  delay = 0,
  duration = 0.08,
  show = true,
  ...props
}: Props) => {
  const letters = Array.from(text)

  const container: Variants = {
    hidden: {
      opacity: 0
    },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: duration, delayChildren: i * delay }
    })
  }

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200
      }
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200
      }
    }
  }

  return (
    <motion.h1
      style={{ display: 'flex', overflow: 'hidden' }}
      variants={container}
      initial="hidden"
      animate={show ? 'visible' : 'hidden'}
      className={css({
        fontSize: '5xl',
        color: '#fff',
        textShadow: `
                  2px 0 #98135e, -2px 0 #98135e, 0 2px #98135e, 0 -2px #98135e,
                  1px 1px #f4d0b5, -1px -1px #f4d0b5, 1px -1px #f4d0b5, -1px 1px #f4d0b5
                `
      })}
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
