import type { HTMLAttributes } from 'react'

type ScrollAreaProps = HTMLAttributes<HTMLDivElement>

const ScrollArea = ({ style, ...props }: ScrollAreaProps) => {
  return <div {...props} style={{ overflow: 'auto', ...style }} />
}

export default ScrollArea
