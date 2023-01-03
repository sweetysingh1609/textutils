import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
function App() {
  const [mode, setMode] = useState('light');

  const toogleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
    }else{
      setMode('light');
      document.body.style.back
      groundColor='white';
    }
  }
  return (
  <>
  <Navbar title="TextUtils" mode={mode} toogleMode={toogleMode} />
  <div className="container my-3">
  <TextForm mode={mode} heading="Enter the text to analyze below"/>
  {/* <About/> */}
  </div>
  </>
  );
}

export default App;
