import { Card } from '../../components/neobrutalism'
import { PageSection } from '../../components/layout/PageLayout'
import './ExperienceSection.css'

const ExperienceSection = () => {
  return (
    <PageSection id="experience">
      <section className="section section-centered">
        <h2>What i can do for you</h2>
        <div className="grid wide-grid service-grid">
          <Card className="section-card service-card service-card-dominant">
            <div className="service-icon service-stamp">🧠</div>
            <h3>Embedded Systems Delivery</h3>
            <p>
              Ship production-ready firmware for connected devices, from bootloaders to RTOS
              bring-up and driver integration.
            </p>
          </Card>
          <Card className="section-card service-card">
            <div className="service-icon service-stamp">⚙️</div>
            <h3>Hardware-Software Co-Design</h3>
            <p>
              Partner with electrical teams to optimize power, latency, reliability, and
              manufacturability across the stack.
            </p>
          </Card>
          <Card className="section-card service-card">
            <div className="service-icon service-stamp">📡</div>
            <h3>Developer & Operator Tooling</h3>
            <p>
              Build dashboards and internal tools that make embedded telemetry actionable for
              product and field teams.
            </p>
          </Card>
        </div>
      </section>
    </PageSection>
  )
}

export default ExperienceSection
