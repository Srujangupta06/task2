import { Route, Routes } from "react-router-dom";
import Home from "./Screens/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Jobs from "./Screens/Jobs";
import Companies from "./Screens/Companies";
import Dashboard from "./Screens/Dashboard";
import Candidates from "./Screens/Candidates";
import ScrollToTop from "./components/ScrollToTop";

function App() {

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<>
          <Header /><Home /><Footer /></>} />
        <Route path="/jobs" element={<><Header /><Jobs /><Footer /></>} />
        <Route path="/companies" element={<><Header /><Companies /><Footer /></>} />
        <Route path="/dashboard" element={<><Header /><Dashboard /><Footer /></>} />
        <Route path="/candidates" element={<><Header /><Candidates /><Footer /></>} />

      </Routes>
    </>

  )
}

export default App
