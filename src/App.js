import './App.css';
import Signin from './components/SignIn';
import OnBoardingSlider from './components/OnBoardingSlider';
import Signup from './components/SignUp';
import EmailVerification from './components/EmailVerification';
import ForgetPassword from './components/ForgetPassword';
import CompanyInfo from './components/CompanyInfo';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import InviteTeam from './components/InviteTeam';
import EmailContext from './store/Auth';
import { useState } from 'react';
function AppContent() {
  const location = useLocation();

  // if (location.pathname === '/forgetpassword') {
  //   return <EmailVerification />;
  // }
  return (
    <div className='flex'>
      <div className="w-1/2">
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
      <div className="w-1/2">
        <OnBoardingSlider />
      </div>
    </div>
  );
}

function App() {
  const [email, setEmail] = useState("");

  return (
    <BrowserRouter>
      <EmailContext.Provider value={{ email, setEmail }}>
        <Routes>
          <Route path="*" element={<AppContent />} />
          <Route path="/verify" element={<EmailVerification />} />
          <Route path="/forgotpassword" element={<ForgetPassword />} />
          <Route path="/companyonboard" element={<CompanyInfo />} />
          <Route path="/invite" element={<InviteTeam />} />
        </Routes>
      </EmailContext.Provider>
    </BrowserRouter>
  );
}

export default App;
