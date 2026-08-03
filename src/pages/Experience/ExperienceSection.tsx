import { Card } from "../../components/neobrutalism";
import { PageSection } from "../../components/layout/PageLayout";
import "./ExperienceSection.css";

const ExperienceSection = () => {
  return (
    <PageSection id="experience">
      <section className="section section-centered">
        <h2>What I Can Do for You</h2>
        <div className="grid wide-grid service-grid">
          <Card className="section-card service-card service-card-dominant">
            <h3>Front-End Development</h3>
            <p>
              Build intuitive, high-performance web apps, crafting well designed
              interfaces that make complex systems feel simple.
            </p>
          </Card>
          <Card className="section-card service-card">
            <h3>Embedded & Robotics</h3>
            <p>
              Ship production firmware for robotic and embedded devices, from
              low-level drivers and device bring-up through to Linux-embedded
              systems and networking.
            </p>
          </Card>
          <Card className="section-card service-card">
            <h3>Full-Stack & Tools</h3>
            <p>
              Build dashboards, internal tools, and automation pipelines that
              connect systems and streamline CI/CD, making development and
              operations seamless.
            </p>
          </Card>
        </div>
      </section>
    </PageSection>
  );
};

export default ExperienceSection;
