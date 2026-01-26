import { PageLayout } from "./components/layout/PageLayout";
import EducationSection from "./pages/Education/EducationSection";
import ExperienceSection from "./pages/Experience/ExperienceSection";
import ExperienceTimelineSection from "./pages/Experience/ExperienceTimelineSection";
import HomeSection from "./pages/Home/HomeSection";
import SkillsSection from "./pages/Skills/SkillsSection";

const DesktopApp = () => {
  return (
    <PageLayout>
      <HomeSection />
      <ExperienceSection />
      <ExperienceTimelineSection />
      <SkillsSection />
      <EducationSection />
    </PageLayout>
  );
};

export default DesktopApp;
