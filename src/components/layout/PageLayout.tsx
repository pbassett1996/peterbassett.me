import type { ReactNode, Ref } from 'react'
import './PageLayout.css'

type PageLayoutProps = {
  children: ReactNode
}

type PageSectionProps = {
  id: string
  children: ReactNode
  className?: string
  innerClassName?: string
  sectionRef?: Ref<HTMLElement>
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return <div className="page">{children}</div>
}

const PageSection = ({
  id,
  children,
  className,
  innerClassName,
  sectionRef,
}: PageSectionProps) => {
  return (
    <section
      id={id}
      ref={sectionRef}
      className={['page-section', className].filter(Boolean).join(' ')}
    >
      <div className={['page-inner', innerClassName].filter(Boolean).join(' ')}>
        {children}
      </div>
    </section>
  )
}

export { PageLayout, PageSection }
