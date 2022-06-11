import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpClick=()=>{
    // console.log("uppercase Was clicked" + text); 
    let upper=text.toUpperCase();
    setText(upper);
    props.showAlert('Changed to UpperCase','success');
    if(text.length===0){
      props.showAlert('Please Enter Something','warning');

    }

  }
  const handleLowClick=()=>{
    // console.log("uppercase Was clicked" + text); 
    let lower=text.toLowerCase();
    setText(lower);
    props.showAlert('Changed to LoweCase','success');
    if(text.length===0){
      props.showAlert('Please Enter Something','warning');

    }

  }
  const handleOnchange=(event)=>{
    // console.log("handleOnchange "); 
    setText(event.target.value); //have to use setText function 

  }
  const handleCopy=()=>{
    var copyText = document.getElementById("myBox");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    props.showAlert('Copied Text','success');

  }
  const handleCount=()=>{
    var s = text; 
    alert(s.replace(/\D/g, '').length); 
  }

  const handleSpace=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra Spaces has been Removed","success")

  }

  const [text,setText]=useState('');
  // text='New Text'; //You can not change useState Like with text variable
  // setText('Updated Text'); //have to use setText function 
  return (
    <>
    <div className='container mb-2'>
            <h3>{props.Heading}</h3>
            <div className="mb-3">
                <textarea value={text} onChange={handleOnchange} style={{backgroundColor:props.mode==='dark'?"grey":"white",color:props.mode==='dark'?"white":"black"}} className="form-control" id="myBox" rows="8"></textarea>
            </div>
            <button onClick={handleUpClick} className="btn btn-primary">Convert to Uppercase</button>
            <button onClick={handleLowClick} className="btn btn-warning ml-2">Convert to Lowercase</button>
            <button onClick={handleCopy} className="btn btn-info ml-2">Copy text</button>
            <button onClick={handleCount} className="btn btn-info ml-2">Count Numbers</button>
            <button onClick={handleSpace} className="btn btn-danger ml-2">Remove Spaces</button>
    </div>
    <div className="container">
      <h3>Your Word Summary</h3>
      <h6>{text.split(" ").length-1} word and {text.length} characters</h6>
      <p>{0.008 * text.split(" ").length}Minutes to Read</p>
      <h3>Preview</h3>
      <h6 text-align='center'>{text.length!==0?text:"Enter Text Above To preview"}</h6>
    </div>
  </>

  )
}
