import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpclick = () =>{
       // console.log("Handle Up was Used" + text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("UpperCase Was Used", "success");
    }
    const handleLoclick = () =>{
       // console.log("Handle Lo was Used" + text);
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("LowerCase Was Used", "success");
    }
    const handleLclearlick = () =>{
       // console.log("Handle Lo was Used" + text);
        let newText='';
        setText(newText)
        props.showAlert("Text Is Cleared", "success");
    }
    const handleOnchange = (event) =>{
      //  console.log("On Change was Used");
        setText(event.target.value);
        props.showAlert("Copied to Clipboard!", "success");
    }
    const handleCopy = () => { 
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }
    

    const [text, setText] = useState('');

 return (
        <>
        <div className="mb-3" >
            <h1> {props.heading} </h1>
        <div className="mb-3">
        <textarea className="form-control" value={text}  onChange={handleOnchange} style={{backgroundColor: props.mode === 'dark'?'grey' : 'white' , color: props.mode==='dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="8" ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpclick}> Convert To Uppercase </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoclick}> Convert To Lowercase </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLclearlick}> Clear </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}> Copy To Clipboard </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}> Remove Extra Spaces </button>
        </div>
        <div className="container">
            <h1>
                Your Text summary
            </h1>
            <p>
                Words: {text.split(/\s+/).filter((element)=>{return element.length !==0}).length} Characters :{text.length}
            </p>
            <p>
            Total Minutes to Read Text{0.008 * text.split(" ").filter((element)=>{return element.length !==0}).length}
            </p>
            <h2> Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
        </>
  )
}