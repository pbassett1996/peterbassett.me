import type { HTMLAttributes } from 'react'
import './Card.css'

type CardProps = HTMLAttributes<HTMLDivElement>

const Card = ({ className, ...props }: CardProps) => {
  return <div {...props} className={['nb-card', className].filter(Boolean).join(' ')} />
}

export default Card
