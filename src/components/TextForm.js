import React, {useState} from 'react'


export default function TextForm(props) {

  

  const speak = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
}
  const handleUpClick=()=>{
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleLowClick=()=>{
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleItalic = ()=>{
  var mtext = document.getElementById('myBox');
  mtext.style.fontStyle= 'italic';
  }
const handleNormal = ()=>{
  var mtext = document.getElementById('myBox');
  mtext.style.fontStyle= 'normal';
  }
  
  const handleClear = ()=>{
  setText("");
  }

  const handleOnChange=(event)=>{
    setText(event.target.value)
  }
  const handleCopy=()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);

  }
  const handleExtraSpaces =()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }


  const [text, setText] = useState('');

  

  return (
    <>
    <div className='container' >
    <h1>{props.heading}</h1>
  <div className="mb-3">
  
  <textarea onChange={handleOnChange}className="form-control" value={text} id="myBox" rows="8"></textarea>
</div>
<button  onClick={handleUpClick} className="btn btn-primary mx-1">Convert to UpperCase</button>
<button  onClick={handleLowClick} className="btn btn-primary mx-1">Convert to LowerCase</button>
<button  onClick={handleItalic} className="btn btn-primary mx-1">Convert to Italic</button>
<button  onClick={handleNormal} className="btn btn-primary mx-1">Convert to Normal</button>
<button  onClick={handleExtraSpaces} className="btn btn-primary mx-1">Remove Extra Space</button>
<button  onClick={handleCopy} className="btn btn-primary mx-1">Copy Text</button>
<button  onClick={handleClear} className="btn btn-primary mx-1">Clear Text</button>


<button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
    </div>
    <div className="container my-3">
      <h2>Your Text Summary</h2>
      <p>{text.split (" ").length-1} Words and {text.length} Characters</p>
      <p>{(text.split (" ").length-1) * 0.008} Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
