import { Route, Routes } from "react-router-dom";
import Home from "./Screens/Home";
import Header from "./components/Header";



function App() {
  return (
    <Routes>
      <Route path="/" element={<>
        <Header /><Home /></>} />
    </Routes>
  )
}

export default App
