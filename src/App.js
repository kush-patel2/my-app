//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000)
  }
  const toggleMode=()=>{
    
    if(mode==='dark'){
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light Mode Has Been Enabled","success");
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor='#46464a';
      showAlert("Dark Mode Has Been Enabled","success");
    }
  }
  
  
  const toggleMode2=()=>{
    
    if(mode==='dark'){
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light Mode Has Been Enabled","success");
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor='#5a0000';
      showAlert("Dark Mode Has Been Enabled","success");
    }
  
  } 

  return (
    <>
    <Router>
   <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} toggleMode2={toggleMode2}/>
   <Alert alert={alert}/>
   <div className="container my-3">
   <Routes>
          <Route exact path="/about" element={<About/>}/>
            
          
          
          <Route exact path="/" element={<TextForm heading="Enter the Text Here" mode={mode} showAlert={showAlert}/>}/>
          
  </Routes>
   
   
   
   </div>
   </Router>
    </>
  );
}

export default App;
