import { useState } from "react";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Vision from "./pages/Vision";
import Values from "./pages/Values";
import History from "./pages/History";
import Accountability from "./pages/Accountability";
import Disability from "./pages/Disability";
import Youth from "./pages/Youth";
import Education from "./pages/Education";
import Wash from "./pages/Wash";
import Food from "./pages/Food";
import Climate from "./pages/Climate";
import Peace from "./pages/Peace";
import Impact from "./pages/Impact";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import Footer from "./components/Footer";
import Policies from "./pages/Policies";
import Governance from "./pages/Governance";
import Where from "./pages/Where";
import Approaches from "./pages/Approaches";
import Humanitarian from "./pages/Humanitarian";


function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className="min-h-screen bg-white">

      <TopBar />

      <Navbar
        currentTab={currentPage}
        goToPage={setCurrentPage}
      />

      <main>
        {currentPage === "home" && (
  <Home goToPage={setCurrentPage} />
)}

{currentPage === "overview" && (
  <About />
)}

{currentPage === "vision" && (
  <Vision />
)}

{currentPage === "values" && (
  <Values />
)}

{currentPage === "approaches" && (
  <Approaches />
)}

{currentPage === "history" && (
  <History />
)}


{currentPage === "where" && (
  <Where />
)}

{currentPage === "accountability" && (
  <Accountability />
)}

{currentPage === "policies" && (
  <Policies />
)}

{currentPage === "governance" && (
  <Governance />
)}

{currentPage === "humanitarian" && (
  <Humanitarian />
)}

{currentPage === "disability" && (
  <Disability />
)}

{currentPage === "youth" && (
  <Youth />
)}

{currentPage === "education" && (
  <Education />
)}

{currentPage === "wash" && (
  <Wash />
)}

{currentPage === "food" && (
  <Food />
)}

{currentPage === "climate" && (
  <Climate />
)}

{currentPage === "peace" && (
  <Peace />
)}

{currentPage === "impact" && (
  <Impact />
)}

{currentPage === "news" && (
  <News />
)}

{currentPage === "contact" && (
  <Contact />
)}

{currentPage === "donate" && (
  <Donate />
)}
      </main>

<Footer goToPage={setCurrentPage} />
    </div>
  );
}

export default App;