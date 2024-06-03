import { Route, Routes } from "react-router-dom";
import LandingPage from "@/pages/Home/LandingPage";
import RootLayout from "@/pages/RootLayout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<LandingPage />} />
      </Route>
    </Routes>
  );
};

export default App;
