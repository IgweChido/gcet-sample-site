
import './App.css';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from './components/Footer';
import Hero from './components/Hero';
import HomeSec2 from './components/HomeSec2';
import HomeSec3 from './components/HomeSec3';
import HomeSec4 from './components/HomeSec4';
import HomeSec5 from './components/HomeSec5';
import HomeSec6 from './components/HomeSec6';
import Home from './Pages/Home';
import Solutions from './Pages/Solutions';
import ISS from './Pages/ISS';
import Consultancy from './Pages/Consultancy';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
        <Route exact path="/" element={ <Home/>} />
        <Route exact path="/solutions/esss" element={  <Solutions/>} />
        <Route exact path="/solutions/iss" element={  <ISS/>} />
        <Route exact path="/consultancy" element={  <Consultancy/>} />
        <Route exact path="/blog" element={  <Blog/> } />
        <Route exact path="/contact" element={ <Contact/> } />
         
       
        
        </Routes>
        
        <Footer/>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
