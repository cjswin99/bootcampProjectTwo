import React from "react";
import LandingPage from "./pages/LandingPage";
import { ParkProvider } from "./context/ParkContext";

const App: React.FC = () => {
  return (
    <ParkProvider>
      <LandingPage />
    </ParkProvider>
  );
};

export default App;