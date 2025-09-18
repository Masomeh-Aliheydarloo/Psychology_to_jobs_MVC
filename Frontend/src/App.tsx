
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Home from "./pages/Home";
import PersonalityTestInfo from "./pages/PersonalityTestInfo";
import Footer from "./components/Footer";
import BusinessTestInfo from "./pages/BusinessTestInfo";
import JobInfo from "./pages/JobInfo";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useState } from "react";
import Logout from "./pages/Logout";
import CheckIdle from "./components/CheckIdle";
import Info from "./pages/Info";
import PersonalityTest from "./pages/PersonalityTest";
import PersonalityTestResult from "./pages/PersonalityTestResult";
import BusinessTest from "./pages/BisinessTest";
import BusinessTestResult from "./pages/BusinessTestResult";
import JobResult from "./pages/JobResult";
import IntraInfo from "./pages/IntraInfo";
import IntraResult from "./pages/IntraResult";
import InterInfo from "./pages/InterInfo";
import InterResult from "./pages/InterResult";
import SupplementaryInfo from "./pages/SupplementaryTestInfo";
import ClassTest from "./pages/ClassTest";
import InterPResult from "./pages/InterPResult";


import './index.css'  // <-- import Tailwind CSS here
import ChangePassword from "./pages/ChangePassword";
import ForgetPassword from "./pages/ForgetPassword";
import ResetPassword from "./pages/ResetPassword";


// Components

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [refreshNavbar, setRefreshNavbar] = useState<boolean>(false);
  // Handle login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.clear();

  };

  const handleresult = () => {

    setRefreshNavbar(prev => !prev); // trigger Navbar refresh
  };

  return (
    <div>
      <CheckIdle></CheckIdle>
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} showresult={handleresult} key={refreshNavbar ? "refresh1" : "refresh0"} />

      <Routes>

        <Route index element={<Home />} />
        <Route path="/PersonalityTestInfo" element={<PersonalityTestInfo />}></Route>
        <Route path="/BusinessTestInfo" element={<BusinessTestInfo />}></Route>
        <Route path="/IntraInfo" element={<IntraInfo />}></Route>
        <Route path="/InterInfo" element={<InterInfo />}></Route>
        <Route path="/JobInfo" element={<JobInfo />}></Route>
        <Route path="/SupplementaryInfo" element={<SupplementaryInfo />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/ForgetPassword" element={<ForgetPassword />}></Route>
        <Route path="/ResetPassword" element={<ResetPassword />}></Route>
        {/* Only allow access if  logged in */}
        <Route path="/Login" element={<Login onLogin={handleLogin} />} />
        <Route path="/logout" element={<Logout onLogout={handleLogout} />} />
        <Route path="/changepassword" element={<ChangePassword onLogin={handleLogin} />} />
        <Route path="/Info" element={<Info onLogin={handleLogin} />} />
        <Route path="/PersonalityTest" element={<PersonalityTest onLogin={handleLogin} showresult={handleresult} />} />
        <Route path="/personalityTestResult" element={<PersonalityTestResult onLogin={handleLogin} />} />
        <Route path="/ClassTest" element={<ClassTest onLogin={handleLogin} showresult={handleresult} />} />
        <Route path="/BusinessTest" element={<BusinessTest onLogin={handleLogin} showresult={handleresult} />} />
        <Route path="/BusinessTestResult" element={<BusinessTestResult onLogin={handleLogin} />} />
        <Route path="/IntraResult" element={<IntraResult onLogin={handleLogin} />} />
        <Route path="/InterResult" element={<InterResult onLogin={handleLogin} />} />
        <Route path="/JobResult" element={<JobResult onLogin={handleLogin} showresult={handleresult} />} />
        <Route path="/InterPResult" element={<InterPResult onLogin={handleLogin} />} />


      </Routes>

      <Footer />

    </div>
  );
}
