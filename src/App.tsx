import DesktopApp from "./DesktopApp";
import Snackbar from "./components/ui/Snackbar";
import useMediaQuery from "./hooks/useMediaQuery";
import MobileApp from "./mobile/MobileApp";
import ResumeApp from "./ResumeApp";

function App() {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isResume = new URLSearchParams(window.location.search).has("resume");

  if (isResume) {
    return <ResumeApp />;
  }

  return (
    <>
      {isMobile ? <MobileApp /> : <DesktopApp />}
      <Snackbar />
    </>
  );
}

export default App;
