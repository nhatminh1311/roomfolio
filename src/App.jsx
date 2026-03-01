import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import Safety from "./pages/Safety";
import Preview from "./pages/Preview";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/safety" element={<Safety />} />
<Route path="/preview" element={<Preview />} />
    </Routes>
  );
}

export default App;