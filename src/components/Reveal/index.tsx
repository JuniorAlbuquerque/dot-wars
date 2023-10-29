import { FunctionComponent, ReactNode } from 'react'
import { motion } from 'framer-motion'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  scale?: number
  margin?: string
}

export const Reveal: FunctionComponent<RevealProps> = ({
  children,
  delay = 0,
  scale = 1.03,
  className = '',
  margin = '180px'
}) => {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, scale },
        visible: { opacity: 1, scale: 1 }
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8, margin }}
      transition={{
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay
      }}
    >
      {children}
    </motion.div>
  )
}
