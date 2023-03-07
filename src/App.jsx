import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components
import Home from "./components/Routes/home/Home";
import NavBar from "./components/Layout/Navbar/Navbar";
import Login from "./components/Routes/login/Login";
import MyConsultation from "./components/Routes/myConsultation/MyConsultation";
import NewConsultation from "./components/Routes/newConsultation/NewConsultation";
import DoctorCard from "./components/DoctorCard/DoctorCard";
import Footer from "./components/Layout/Footer/Footer";
import SignUp from "./components/Sign-Up/Sign-Up";

const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/novaconsulta" element={<NewConsultation />} />
          <Route path="/minhasconsultas" element={<MyConsultation />} />
          <Route path="/login" element={<Login />} />
          <Route path="/doctors" element={<DoctorCard />} />
          <Route path="/cadastro" element={<SignUp />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
