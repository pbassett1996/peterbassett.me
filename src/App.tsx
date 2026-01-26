import DesktopApp from "./DesktopApp";
import Snackbar from "./components/ui/Snackbar";
import useMediaQuery from "./hooks/useMediaQuery";
import MobileApp from "./mobile/MobileApp";

function App() {
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <>
      {isMobile ? <MobileApp /> : <DesktopApp />}
      <Snackbar />
    </>
  );
}

export default App;
