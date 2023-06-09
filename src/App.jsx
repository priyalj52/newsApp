import './App.css';
import  Navbar from "./components/Navbar";
import Prediction from './components/Prediction';
import Hero1Section from './components/Hero1Section';
import Recommendation from './components/Recommendation';
import Sports from './pages/CustomNews';
import {Routes,Route} from "react-router-dom"
import Footer from './components/Footer';
function App() {
  return (
    <div className='w-full h-auto bg-slate-100'>
     <Hero1Section/>
     <Prediction/>
     <Recommendation/>
     <footer>
      <Footer/>
     </footer>
    </div>
  );
}

export default App;
