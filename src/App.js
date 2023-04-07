import './App.css';
import Signin from './components/SignIn';
import OnBoardingSlider from './components/OnBoardingSlider';
import Signup from './components/SignUp';
import EmailVerification from './components/EmailVerification';
import ForgetPassword from './components/ForgetPassword';
import CompanyInfo from './components/CompanyInfo';
import EmailSent from './components/EmailSent';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import InviteTeam from './components/InviteTeam';
import { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import SetNewPassword from './components/SetNewPassword';
import PasswordChanged from './components/PasswordChanged'
import Dashboard from './components/Dashboard';
import InviteOnboard from './components/InviteOnboard';
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
    <Provider store={store}>
    <BrowserRouter>
        <Routes>
          <Route path="*" element={<AppContent />} />
          <Route path="/verify" element={<EmailVerification />} />
          <Route path="/forgotpassword" element={<ForgetPassword />} />
          <Route path="/companyonboard" element={<CompanyInfo />} />
          <Route path="/invite" element={<InviteTeam />} />
          <Route path="/emailsent" element={<EmailSent />} />
          <Route path="/setpassword" element={<SetNewPassword />} />
          <Route path="/passwordchanged" element={<PasswordChanged />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/inviteonboard" element={<InviteOnboard />} />

        </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
