import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');//Whether dark mode is enabled or not
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })  
    setTimeout(()=>{
      setAlert(null)
    },1500);
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#020202d1';
      document.body.style.color='white';
      showAlert("Dark Mode has been Enabled","success")
      document.title="TextUtils - Dark Mode"
      // For Blinking Title
      // setInterval(() => {
      //   document.title="Install TextUtils On Pc";

      // }, 1000);
      // setInterval(() => {
      //   document.title="TextUtils Is Amazing ";
      // }, 2000);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      showAlert("Light Mode has been Enabled","success")
      document.title="TextUtils - Light Mode"

    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
        <Routes>
            <Route exact path="/about" element={<About mode={mode}/>}>
            </Route>
            <Route exact path="/TextUtilsReact" element={<TextForm showAlert={showAlert} Heading="Try TextUtils- Word Counter,Character Counter,Remove Extra Space And More" mode={mode}/>}>
            </Route>
        </Routes>
    </div>
    </Router>
    </>

  );
}

export default App;
