import { useEffect, useRef, useState } from 'react'
import { Card } from '../../components/neobrutalism'
import { PageSection } from '../../components/layout/PageLayout'
import SnakeAcademyGame from './components/SnakeAcademyGame'
import { educationHistory } from './data'

const EducationSection = () => {
  const educationRef = useRef<HTMLElement | null>(null)
  const [isEducationActive, setIsEducationActive] = useState(false)

  useEffect(() => {
    if (!educationRef.current) {
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsEducationActive(entry.isIntersecting)
      },
      { threshold: 0.4 },
    )
    observer.observe(educationRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <PageSection id="education" innerClassName="grid-layout" sectionRef={educationRef}>
      <div className="grid-aside">
        <SnakeAcademyGame isActive={isEducationActive} />
      </div>
      <div className="section section-right">
        <h2>Education</h2>
        <div className="stack">
          {educationHistory.map((item) => (
            <Card key={item.degree} className="section-card">
              <div className="work-header">
                <div>
                  <h3>{item.degree}</h3>
                  <p className="muted">{item.school}</p>
                </div>
                <span className="pill">{item.timeframe}</span>
              </div>
              <p>{item.details}</p>
            </Card>
          ))}
        </div>
      </div>
    </PageSection>
  )
}

export default EducationSection
