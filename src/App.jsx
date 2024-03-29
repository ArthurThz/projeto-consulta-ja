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
import NotAllowed from "./components/Routes/NotAllowed/NotAllowed";
import { userContext } from "./Context/UserContext";
import { useContext } from "react";
import { ToggleMenuContext } from "./Context/toggleMenuContext";
import MenuMobile from "./components/Layout/MenuMobile/MenuMobile";
const App = () => {
  const { user } = useContext(userContext);
  const { menuIsOpen } = useContext(ToggleMenuContext);

  return (
    <div>
      <Router>
        {menuIsOpen === true ? (
          <>
            <NavBar />
            <MenuMobile />
          </>
        ) : (
          <>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<SignUp />} />
              {user ? (
                <>
                  <Route path="/doctors" element={<DoctorCard />} />
                  <Route path="/novaconsulta" element={<NewAppointment />} />
                  <Route path="/minhasconsultas" element={<MyAppointments />} />
                </>
              ) : (
                <>
                  <Route path="/doctors" element={<NotAllowed />} />
                  <Route path="/novaconsulta" element={<NotAllowed />} />
                  <Route path="/minhasconsultas" element={<NotAllowed />} />
                </>
              )}
            </Routes>
            <Footer />
          </>
        )}

        {/* <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<SignUp />} />
          {user ? (
            <>
              <Route path="/doctors" element={<DoctorCard />} />
              <Route path="/novaconsulta" element={<NewAppointment />} />
              <Route path="/minhasconsultas" element={<MyAppointments />} />
            </>
          ) : (
            <>
              <Route path="/doctors" element={<NotAllowed />} />
              <Route path="/novaconsulta" element={<NotAllowed />} />
              <Route path="/minhasconsultas" element={<NotAllowed />} />
            </>
          )}
        </Routes>
        <Footer /> */}
      </Router>
    </div>
  );
};

export default App;
