import './App.css';
import './navBar.css';
import './style.css';
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";

import Index from './Component/Index'
import AboutUs from './Component/AboutUs';


function App() {
  return (

    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Index/>}/>
     <Route path="/AboutUs" element={<AboutUs/>}/>

    </Routes>
    
     
    </BrowserRouter>
  );
}

export default App;
