import type { ReactNode } from 'react'
import './Modal.css'

type ModalProps = {
  title?: string
  open: boolean
  onClose: () => void
  children: ReactNode
}

const Modal = ({ title, open, onClose, children }: ModalProps) => {
  if (!open) {
    return null
  }

  return (
    <div
      className="nb-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label={title || 'Modal'}
      onClick={onClose}
    >
      <div className="nb-modal-card" onClick={(event) => event.stopPropagation()}>
        <div className="nb-modal-header">
          <h3 className="nb-modal-title">{title}</h3>
          <button type="button" className="nb-modal-close" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="nb-modal-body">{children}</div>
      </div>
    </div>
  )
}

export default Modal
