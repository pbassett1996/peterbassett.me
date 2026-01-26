import DesktopApp from "./DesktopApp";
import useMediaQuery from "./hooks/useMediaQuery";
import MobileApp from "./mobile/MobileApp";

function App() {
  const isMobile = useMediaQuery("(max-width: 767px)");

  return isMobile ? <MobileApp /> : <DesktopApp />;
}

export default App
