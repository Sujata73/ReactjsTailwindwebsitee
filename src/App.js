import logo from './logo.svg';
import React,{useState} from "react"
import './App.css';
import "./index.css"
import Header from './coponents.js/Header';
import Hero from './coponents.js/Hero';
import About from './coponents.js/About';
import Contact from './coponents.js/Contact';
import Dropdown from './coponents.js/Dropdown';







function App() {
  const[isopen, setisopen] = useState(false);
  const toggle=()=>{
    setisopen(!isopen);
  }
  return (
    
    <><Header toggle={toggle}/>
    <Dropdown isopen={isopen} toggle={isopen}/>
    <Hero/>
    <About/>
    <Contact/>
    
    
    </>
  
  )
}

export default App;
