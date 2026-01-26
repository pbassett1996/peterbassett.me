import { PageLayout } from "./components/layout/PageLayout";
import EducationSection from "./pages/Education/EducationSection";
import ExperienceSection from "./pages/Experience/ExperienceSection";
import ExperienceTimelineSection from "./pages/Experience/ExperienceTimelineSection";
import HomeSection from "./pages/Home/HomeSection";
import SkillsSection from "./pages/Skills/SkillsSection";
import ContactSection from "./pages/Contact/ContactSection";

const DesktopApp = () => {
  return (
    <PageLayout>
      <HomeSection />
      <ExperienceSection />
      <ExperienceTimelineSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
    </PageLayout>
  );
};

export default DesktopApp;
