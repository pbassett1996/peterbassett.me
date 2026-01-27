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
            <div key={item.company + item.title} className="timeline-row">
              <div className="timeline-marker">
                <span className="timeline-dot" />
                {index < experienceHighlights.length - 1 && (
                  <span className="timeline-line" />
                )}
              </div>
              <Card className="section-card timeline-card">
                <div className="work-header">
                  <div>
                    <h3>{item.company}</h3>
                    <p className="muted">{item.title}</p>
                  </div>
                  <span className="pill">{item.timeframe}</span>
                </div>
                <p className="experience-desc">{item.description}</p>
                
                {item.roles && (
                  <div className="role-progression">
                    {item.roles.map((role, idx) => (
                      <div key={role.title + idx} className="role-item">
                        <div className="role-marker">
                          <span className="role-dot" />
                          {idx < item.roles!.length - 1 && <span className="role-line" />}
                        </div>
                        <div className="role-content">
                          <div className="role-header">
                            <h4>{role.title}</h4>
                            <span className="role-time">{role.timeframe}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
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
