import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components
import Home from "./components/Routes/home/Home";
import NavBar from "./components/Layout/Navbar/Navbar";
import Login from "./components/Routes/login/Login";
import MyAppointments from "./components/Routes/MyAppointments/MyAppointments";
import NewAppointment from "./components/Routes/NewAppointment/NewAppointment";
import DoctorCard from "./components/DoctorCard/DoctorCard";
import Footer from "./components/Layout/Footer/Footer";
import SignUp from "./components/Routes/Sign-Up/Sign-Up";

import { userContext } from "./Context/UserContext";
import { useContext } from "react";

const App = () => {
  const { user } = useContext(userContext);
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<SignUp />} />
          {/* {user ? (
            <>
             
            </>
          ) : (
            []
          )} */}
          <Route path="/doctors" element={<DoctorCard />} />
          <Route path="/novaconsulta" element={<NewAppointment />} />
          <Route path="/minhasconsultas" element={<MyAppointments />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
