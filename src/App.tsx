import { PageLayout } from './components/layout/PageLayout'
import EducationSection from './pages/Education/EducationSection'
import ExperienceSection from './pages/Experience/ExperienceSection'
import ExperienceTimelineSection from './pages/Experience/ExperienceTimelineSection'
import HomeSection from './pages/Home/HomeSection'
import SkillsSection from './pages/Skills/SkillsSection'

function App() {
  return (
    <PageLayout>
      <HomeSection />
      <ExperienceSection />
      <ExperienceTimelineSection />
      <SkillsSection />
      <EducationSection />
    </PageLayout>
  )
}

export default App
