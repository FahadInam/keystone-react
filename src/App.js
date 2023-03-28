import './App.css';
import Signin from './components/SignIn';
import OnBoardingSlider from './components/OnBoardingSlider';
import Signup from './components/SignUp';
import EmailVerification from './components/EmailVerification';
import ForgetPassword from './components/ForgetPassword';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function AppContent() {
  const location = useLocation();

  if (location.pathname === '/forgetpassword') {
    return <EmailVerification />;
  }

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
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<AppContent />} />
        {/* <Route path="/verify" element={<EmailVerification />} /> */}
        <Route path="/forgetpassword" element={<ForgetPassword />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
