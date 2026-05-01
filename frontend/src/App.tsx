import { useEffect, useMemo, useState } from "react";
import { Navigate, Route, Routes, useLocation, type Location } from "react-router-dom";
import { TopNav } from "./components/TopNav";
import { LandingPage } from "./pages/LandingPage";
import { RolePage } from "./pages/RolePage";
import { AnnotatorPage } from "./pages/AnnotatorPage";
import { ReviewerPage } from "./pages/ReviewerPage";
import { OverviewPage } from "./pages/OverviewPage";
import { readIdentity } from "./lib/identity";

function HomeRoute() {
  const identity = readIdentity();
  if (!identity) return <Navigate to="/role" replace />;
  return <Navigate to={identity.role === "annotator" ? "/annotator" : "/reviewer"} replace />;
}

export default function App() {
  const location = useLocation();
  const [activeLocation, setActiveLocation] = useState(location);
  const [prevLocation, setPrevLocation] = useState<Location | null>(null);
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    if (location.pathname === activeLocation.pathname) return;
    setPrevLocation(activeLocation);
    setActiveLocation(location);
    setIsSliding(true);
    const timer = setTimeout(() => {
      setPrevLocation(null);
      setIsSliding(false);
    }, 520);
    return () => clearTimeout(timer);
  }, [location, activeLocation]);

  const routeTree = useMemo(
    () => (
      <>
        <Route path="/" element={<HomeRoute />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/role" element={<RolePage />} />
        <Route path="/annotator" element={<AnnotatorPage />} />
        <Route path="/reviewer" element={<ReviewerPage />} />
        <Route path="/overview" element={<OverviewPage />} />
        <Route path="*" element={<Navigate to="/role" replace />} />
      </>
    ),
    []
  );

  return (
    <>
      <TopNav />
      <div className="flow-stage">
        <div className="flow-screen-stack">
          {prevLocation && (
            <div className="flow-screen flow-screen-exit">
              <Routes location={prevLocation}>{routeTree}</Routes>
            </div>
          )}
          <div className={`flow-screen ${isSliding ? "flow-screen-enter" : "flow-screen-still"}`} key={activeLocation.pathname}>
            <Routes location={activeLocation}>{routeTree}</Routes>
          </div>
        </div>
      </div>
    </>
  );
}
