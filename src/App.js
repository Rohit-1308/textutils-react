import './App.css';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';
import Alerts from './components/Alerts';
import About from './components/About';
import {
  BrowserRouter as router,
  Routes,
  Route
} from "react-router-dom";
import React,{Fragment, useState} from 'react';

function App() {
  const [mode, setMode] = useState('light');
  // const [colormode, setColorMode] = useState('');
  const [alert, setAlert] = useState('');

  const toggleAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type})
      setTimeout(() => {
        setAlert(null)
      },1200);
  }
  
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#4871af'
      toggleAlert("Dark Mode Enabled","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor="white"
      toggleAlert("Light Mode Enabled","success")
    }
  }


  return (

  <router>
    <Fragment>
    <Navbar title="Text Utilities" toggleMode={toggleMode} mode={mode} home="Home" about="About" searchButton="Search" placeholder=" "/>
    <div className="blank" style={{width:'80vw'}}>
    <Alerts alert={alert} id="alertbox"/>
    <Routes>
      <Route path="/">
      <Route exact path='/' element={<Textbox/>}/>
      </Route>
      <Route path="/about">
      <Route exact path='/about' element={<About heading="this is about section"/>}/>
     </Route>
    </Routes>
    
    </div>
    </Fragment>
  </router>
    
  );
}

export default App;
