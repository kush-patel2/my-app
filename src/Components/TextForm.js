import React,{useState} from 'react'



export default function TextForm(props) {
  const [text, setText] = useState('');  //"Enter Text here" is a default value for text variable
  //text="new text"; =>Wrong way to change the state
  //setText("new text"); =>Correct way to change the state
  const handleUpClick=()=>{
    // console.log("Button was clicked");
    let newtext=text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to UpperCase","success");
  }
  const handleLoClick=()=>{
    let newtext=text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to LowerCase","success");
  }
  const handleOnChange=(event)=>{
    // console.log("On Change");
    setText(event.target.value);
  }
  const handleClClick=()=>{
    setText("");
    props.showAlert("Cleared Text Area","success");
  }
  const handleTlClick=()=>{
    
    let newtext=titleCase(text);
    setText(newtext);
    props.showAlert("Converted to Title Case","success");

  }
  function titleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}
const handleAlClick=()=>{
    
  let newtext=alternateCase(text);
  setText(newtext);
  props.showAlert("Converted to Alternate Case","success");

}
var alternateCase = function (s) {
  var chars = s.toLowerCase().split("");
  for (var i = 0; i < chars.length; i += 2) {
    chars[i] = chars[i].toUpperCase();
  }
  return chars.join("");
};
const  handleCopyClick=()=>{
  var text=document.getElementById('myBox');
  text.select();
  
  navigator.clipboard.writeText(text.value);
  props.showAlert("Copied to Clipboard","success");
}
const wordcount=(text)=>{
  var count=0;
  var txt= text;
  var spl=txt.split(' ');
  for(var i=0;i<spl.length;i++){
    if(spl[i]!==""){
      count++;
    }
  }
  return count;

}
  return (
    <>
    <div className='conatiner' style={{color: props.mode==='light'?'black':'white'}}>
    <h1>{props.heading}</h1>
    <div className="  mb-3">
        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'#6e6767', color: props.mode==='light'?'black':'white'}}></textarea>
        <button className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>Convert To Uppercase</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleLoClick}>Convert To Lowercase</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleTlClick}>Convert To TitleCase</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleAlClick}>Convert To AlternateCase</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleCopyClick}>Copy Text </button>

        <button className="btn btn-primary mx-2" onClick={handleClClick}>Clear</button>
        
    </div>
    </div>
    <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
      <h2>Your Text Summary</h2>
      <p>{ wordcount(text) } words, {text.length} characters</p>
      <p>{0.008 * text.split(" ").length } -Minutes to Read</p>
      <h2>Preview</h2>
      <p>{text.length>0 ? text:'Enter text in above textbox to preview'}</p>
    </div>
    </>
  )
}
