import { Route, Routes } from "react-router-dom";
import Home from "./Screens/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";



function App() {
  return (
    <Routes>
      <Route path="/" element={<>
        <Header /><Home /><Footer /></>} />
    </Routes>
  )
}

export default App
