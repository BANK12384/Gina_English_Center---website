// App.jsx
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import HamburgerMenu from "./Navbar.jsx";
import Page1 from "./Allpage/Page1.jsx";
import Page2 from "./Allpage/Page2.jsx";
import Page3 from "./Allpage/Page3.jsx";
import Page4 from "./Allpage/Page4.jsx";
import Page5 from "./Allpage/Page5.jsx";
import Page6 from "./Allpage/Page6.jsx";
import Contact from "./Allpage/Page7.jsx";
import Studentinfo from "./Allpage/StudentInifo.jsx";
import Studentinfo2 from "./Allpage/StudentInfo2.jsx";

function ScrollToHashElement() {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

  return null;
}

function MainPage() {
  return (
    <div>
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
      <Contact />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToHashElement />
      <HamburgerMenu />
      <div className="">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/Student" element={<Studentinfo />} />
          <Route path="/Student2" element={<Studentinfo2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
