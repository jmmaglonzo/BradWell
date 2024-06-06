import { Route, Routes } from "react-router-dom";
import LandingPage from "@/pages/Home/LandingPage";

const App = () => {
  return (
    <Routes>
        <Route index element={<LandingPage />} />
    </Routes>
  );
};

export default App;
