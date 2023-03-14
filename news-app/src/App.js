import './App.css';
import  Navbar from "./components/Navbar";
import Prediction from './components/Prediction';
import Hero1Section from './components/Hero1Section';
function App() {
  return (
    <div className='w-full h-screen bg-slate-100'>
     <Navbar/>
     <Hero1Section/>
     <Prediction/>
    </div>
  );
}

export default App;
