import React from 'react'
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
export default function Navbar(props) {
  const handleColor=()=>{
  const Bgcolor=document.getElementById("Mycolor").value;
  document.body.style.backgroundColor=Bgcolor;
  }
  const handleFontColor=()=>{
  const Fontcolor=document.getElementById("fontcolor").value;
  document.body.style.color=Fontcolor;
  }
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link" to="/about">{props.aboutText}</Link>
        </li>
      
      </ul>
      <input type="color" name="colorPicker" id="Mycolor" />
      <button onClick={handleColor} className="btn btn-light mx-2">Theme</button>
     
      <input type="color" name="fontcolorPicker" id="fontcolor" />
      <button onClick={handleFontColor} className="btn btn-light mx-2">Font</button>


      <div className={`custom-control custom-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input type="checkbox" className="custom-control-input" id="customSwitch1"/>
  <label className="custom-control-label" onClick={props.toggleMode} htmlFor="customSwitch1">Switch to Dark Mode</label>
</div>
    </div>
  </div>
</nav>
  )
}
Navbar.propTypes={
    title:PropTypes.string.isRequired,
    aboutText:PropTypes.string,
}


// Default Text For Props
Navbar.defaultProps={
    title:"Type Title Here",
    aboutText:"About Us"
}