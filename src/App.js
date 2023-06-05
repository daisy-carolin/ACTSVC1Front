import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./Components/TopBar";
import Home from "./Pages/Home";
import Login from "./Auth/Login";
import Content from "./Pages/Content";
import Otp from "./Auth/Otp";
import Register from "./Auth/Register";

function App() {
  return (
    
    <Router>
      <TopBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/content" element={<Content />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
