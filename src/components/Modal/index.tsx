import { AnimatePresence, motion } from 'framer-motion'
import { FunctionComponent, ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { dropIn } from './variants'
import { modalOverlay } from './styles.css'

type ModalProps = {
  open: boolean
  children: ReactNode
}

const startGameRoot = document.getElementById('start-game-root') as HTMLElement

export const Modal: FunctionComponent<ModalProps> = ({ open, children }) => {
  return createPortal(
    <AnimatePresence initial={true} mode="wait" onExitComplete={() => null}>
      {open && (
        <motion.div
          variants={dropIn}
          initial="hidden"
          layoutScroll={false}
          animate="visible"
          exit="exit"
          className={modalOverlay}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>,
    startGameRoot
  )
}
