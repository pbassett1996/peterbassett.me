import { useState } from 'react'
import { Card, Modal } from '../../components/neobrutalism'
import { PageSection } from '../../components/layout/PageLayout'
import { skillDetails, skillGroups, type SkillDetail } from './data'
import './SkillsSection.css'

type ActiveSkill = SkillDetail & { name: string }

const SkillsSection = () => {
  const [activeSkill, setActiveSkill] = useState<ActiveSkill | null>(null)

  return (
    <PageSection id="skills">
      <div className="section">
        <h2>My Skills</h2>
        <p className="skill-hint">Click a skill to see more details.</p>
        <div className="grid">
          {skillGroups.map((group) => (
            <Card key={group.title} className="section-card">
              <h3>{group.title}</h3>
              <div className="tag-row">
                {group.skills.map((skill) => (
                  <button
                    key={skill}
                    type="button"
                    className="tag skill-chip"
                    onClick={() => {
                      const detail = skillDetails[skill]
                      if (detail) {
                        setActiveSkill({ name: skill, ...detail })
                      }
                    }}
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Modal
        title={activeSkill?.name ?? ''}
        open={Boolean(activeSkill)}
        onClose={() => setActiveSkill(null)}
      >
        {activeSkill && (
          <div className="skill-modal">
            <p className="skill-summary">{activeSkill.summary}</p>
            <div className="skill-meter">
              <div className="skill-meter-header">
                <span className="skill-level">{activeSkill.label}</span>
                <div className="skill-dots" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span
                      key={`${activeSkill.name}-dot-${index}`}
                      className={index < activeSkill.level ? 'skill-dot active' : 'skill-dot'}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="skill-highlights">
              <h4>Key highlights</h4>
              <ul>
                {activeSkill.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </Modal>
    </PageSection>
  )
}

export default SkillsSection
