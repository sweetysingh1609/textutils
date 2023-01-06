import React, {useState} from 'react'



function TextForm(props) {

  const speak = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
  props.showAlert("Converted text to Speech!","success");
}
  const handleUpClick=()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted text to UpperCase!","success");
  }
  const handleLowClick=()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted text to LowerCase!","success");
  }
  const handleItalic = ()=>{
  var mtext = document.getElementById('myBox');
  mtext.style.fontStyle= 'italic';
  props.showAlert("Converted text to Italic!","success");
  }
const handleNormal = ()=>{
  var mtext = document.getElementById('myBox');
  mtext.style.fontStyle= 'normal';
  props.showAlert("Converted text to Normal!","success");

  }
  
  const handleClear = ()=>{
  setText("");
  props.showAlert("Text is Cleared!","success");
  }

  const handleOnChange=(event)=>{
    setText(event.target.value)
  }
  const handleCopy=()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Text is Copied to Clipboard!","success");

  }
  const handleExtraSpaces =()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra Spaces are removed!","success");
  }


  const [text, setText] = useState('');

  

  return (
    <>
    <div style={{color:props.mode==='light' ? '#042743': 'white'}} className='container' >
    <h1>{props.heading}</h1>
  <div className="mb-3">
  
  <textarea style={{backgroundColor:props.mode==='dark' ? '#13466e': 'white', color: props.mode==='dark' ? 'white': 'black' }} onChange={handleOnChange}className="form-control" value={text} id="myBox" rows="8"></textarea>
</div>
<button disabled={text.length===0} onClick={handleUpClick} className="btn btn-primary mx-1 my-1">Convert to UpperCase</button>
<button disabled={text.length===0} onClick={handleLowClick} className="btn btn-primary mx-1 my-1">Convert to LowerCase</button>
<button disabled={text.length===0} onClick={handleItalic} className="btn btn-primary mx-1 my-1">Convert to Italic</button>
<button disabled={text.length===0} onClick={handleNormal} className="btn btn-primary mx-1 my-1">Convert to Normal</button>
<button disabled={text.length===0} onClick={handleExtraSpaces} className="btn btn-primary mx-1 my-1">Remove Extra Space</button>
<button disabled={text.length===0} onClick={handleCopy} className="btn btn-primary mx-1 my-1">Copy Text</button>
<button disabled={text.length===0} onClick={handleClear} className="btn btn-primary mx-1 my-1">Clear Text</button>


<button disabled={text.length===0} type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='light' ? 'black': 'white'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split (" ").length-1} Words and {text.length} Characters</p>
      <p>{(text.split (" ").length-1) * 0.008} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0 ? text: "Enter something in the above text box to preview it here" }</p>
    </div>
    </>
  )
}
export default TextForm