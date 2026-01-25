import { Card } from '../../components/neobrutalism'
import { PageSection } from '../../components/layout/PageLayout'
import WhackABugGame from './components/WhackABugGame'
import { experienceHighlights } from './data'
import './ExperienceTimelineSection.css'

const ExperienceTimelineSection = () => {
  return (
    <PageSection id="experience-timeline" innerClassName="grid-layout">
      <div className="section">
        <h2>My Experience</h2>
        <div className="timeline">
          {experienceHighlights.map((item, index) => (
            <div key={item.title} className="timeline-row">
              <div className="timeline-marker">
                <span className="timeline-dot" />
                {index < experienceHighlights.length - 1 && (
                  <span className="timeline-line" />
                )}
              </div>
              <Card className="section-card timeline-card">
                <div className="work-header">
                  <div>
                    <h3>{item.title}</h3>
                    <p className="muted">{item.company}</p>
                  </div>
                  <span className="pill">{item.timeframe}</span>
                </div>
                <p>{item.description}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <div className="grid-aside">
        <WhackABugGame />
      </div>
    </PageSection>
  )
}

export default ExperienceTimelineSection
