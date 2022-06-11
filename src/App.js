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
  Link
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
      document.body.style.backgroudColor='#212429';
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
          {/* Use of Exact 
          /users----------->Component 1
          /users/home----------->Component 2

           */}
            <Route exact path="/about" element={<About/>}>
            </Route>
            <Route exact path="/" element={ <TextForm showAlert={showAlert} Heading="Enter the text for Anaylze Below" mode={mode}/>}>
            </Route>
        </Routes>
    </div>
    </Router>
    </>

  );
}

export default App;
