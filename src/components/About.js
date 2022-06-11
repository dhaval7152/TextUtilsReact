import React from 'react'
export default function About
(props) {
    
    // setMystyle(dark);
    // const toggleMode=()=>{
    //     if(myStyle.backgroundColor==="white"){
    //         setMystyle({
    //             color:'white',
    //             backgroundColor:'black',
    //             border:"1px solid white"
    //         })
    //         setbtnText('Disable Dark Mode')
    //         setbtnStyle({backgroundColor:"white",color:"black"})
    //     }
    //     else{
    //         setMystyle({
    //             color:'black',
    //             backgroundColor:'white'
    //         })
    //         setbtnText('Enable Dark Mode')
    //         setbtnStyle({backgroundColor:"green",color:"white"})
            
    //     }
       
    // }
   let myStyle={
    color:props.mode==='dark'?'white':'black',
    backgroundColor:props.mode==='dark'?'grey':'white',

   }
    // const [myStyle,setMystyle]=useState({
    //     color:'black',
    //     backgroundColor:'white'

    // })
    // const [btnstyle,setbtnStyle]=useState({
    //     color:"white",
    //     backgroundColor:"green"

    // })
    // const [btnText,setbtnText]=useState("Enable Dark Mode")
  return (
    <div className='container ' style={{myStyle,border:"2px solid white"}} >
        <h2>About Us </h2>
        <div className="accordion" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
            <button style={myStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
           <b>Analyze Your text</b> 
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div style={myStyle} className="accordion-body">
                Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or 
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
            <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
           <b>Free to use</b> 
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div  className="accordion-body">
               TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
            <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
             <b>Browser Compatible</b>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        </div>
        {/* <div className="container">

        <button onClick={toggleMode} style={btnstyle} className='btn btn-primary'>{btnText}</button>
        </div> */}
    </div>
  )
}
