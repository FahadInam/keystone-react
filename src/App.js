import './App.css';
import Signin from './components/SignIn';
import OnBoardingSlider from './components/OnBoardingSlider';

function App() {
  return (
    <div className='flex'>
      <div className="w-1/2">
        <Signin />
        </div> 
      <div className="w-1/2">
        <OnBoardingSlider />
        </div>
          </div>
  );
}

export default App;
 