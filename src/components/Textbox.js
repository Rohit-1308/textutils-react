import React, { useState }  from 'react'

export default function Textbox(props) {
    const [text, settext] = useState('');
    
    

    const handleUpClick=()=>{
        let newText =text.toUpperCase();
        settext(newText)
        props.toggleAlert("Converted to Uppercase","success")
    }
    const handleLowerClick=()=>{
        let newText =text.toLowerCase();
        settext(newText)
        props.toggleAlert("Converted to Lowercase","success")

    }
    const handleClearClick=()=>{
        let newText =''
        settext(newText)
        props.toggleAlert("Cleared text successfully","success")
    }

    const handleOnChange=(event)=>{
        settext(event.target.value)
    }

    const copyText=()=>{
        var text=document.getElementById("mybox");
        text.select();
        text.setSelectionRange(0,99999)
        navigator.clipboard.writeText(text.value);
        props.toggleAlert("Text Copied succesfully","success")

    }
   

    return (
        <>
        <div style={{color:props.mode==='light'?'black':'white'}}>
            <h1>Text Editor</h1>            
            <div className="input-group mb-3 "  >
                <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange} placeholder="Start Typing" id="mybox" aria-label="With textarea" rows="3"></textarea>
            </div>
        </div>
        <div className="buttons" style={{color:props.mode==='light'?'black':'white'}}>
        <button className="btn btn-primary mx-3 my-2 " onClick={handleUpClick} >To Upper case</button>
            <button className="btn btn-primary mx-3 my-2" onClick={handleLowerClick}>To Lower case</button>
            <button className="btn btn-primary mx-3 my-2" onClick={handleClearClick}>Clear</button>
            <button className="btn btn-primary mx-3 my-2" onClick={copyText}>copy</button>
        </div>

            

            <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
                <h3>Your text summary</h3>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{text}</p>
            </div>
        </>
    )
}
