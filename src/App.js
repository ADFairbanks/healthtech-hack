import { Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import Questionnaire from "./components/Questionnaire/Questionnaire";
import FAQ from "./components/FAQ/FAQ";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="page">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/questionnaire" element={<Questionnaire />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
